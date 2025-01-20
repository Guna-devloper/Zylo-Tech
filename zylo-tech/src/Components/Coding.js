import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { oneDark } from "@codemirror/theme-one-dark";
import { githubLight } from "@uiw/codemirror-theme-github";
import axios from "axios";
import "./Coding.css";
import { FaSun, FaMoon } from "react-icons/fa";

const Coding = ({ userId }) => {
  const [code, setCode] = useState("// Write your code here...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const apiKey = "08b860f405mshbb8068011874f25p13e3d4jsn1787c4e29b41";
  const apiUrl = "https://judge0-ce.p.rapidapi.com";

  // Language templates
  const languageTemplates = {
    javascript: `// JavaScript: Hello, World!
console.log("Hello, World!");`,
    python: `# Python: Hello, World!
print("Hello, World!")`,
    cpp: `// C++: Hello, World!
#include <iostream>
using namespace std;
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
    c: `// C: Hello, World!
#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    java: `// Java: Hello, World!
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  };

  // Fetch saved code when the component loads
  useEffect(() => {
    axios
      .get(`/api/code/${userId}`)
      .then((res) => setCode(res.data.code))
      .catch((err) => console.error("Error fetching saved code:", err));

    // New API call to fetch Judge0 system info
    const fetchSystemInfo = async () => {
      const options = {
        method: "GET",
        url: "https://judge0-ce.p.rapidapi.com/about",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log("Judge0 System Info:", response.data);
      } catch (error) {
        console.error("Error fetching system info:", error);
      }
    };

    fetchSystemInfo();
  }, [userId]);

  // Save the code to the backend
  const handleSaveCode = () => {
    axios
      .post(`/api/code/save`, { userId, code, language })
      .then(() => alert("Code saved successfully!"))
      .catch((err) => console.error("Error saving code:", err));
  };

  // Map language to Judge0 language IDs
  const getLanguageId = () => {
    switch (language) {
      case "javascript":
        return 63; // Node.js
      case "python":
        return 71; // Python 3
      case "cpp":
        return 54; // C++ (GCC)
      case "java":
        return 62; // Java (OpenJDK)
      case "c":
        return 50; // C (GCC)
      default:
        return 63;
    }
  };

  const handleRunCode = async () => {
    setIsLoading(true);
    setOutput(""); // Clear previous output
  
    try {
      // Encode the code in base64
      const encodedCode = btoa(code);
  
      const submissionResponse = await axios.post(
        `${apiUrl}/submissions?base64_encoded=true&wait=false`, // Change to base64_encoded=true
        {
          source_code: encodedCode, // Send the Base64 encoded code
          language_id: getLanguageId(),
          stdin: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
        }
      );
  
      const token = submissionResponse.data.token;
  
      // Poll for result
      let result = null;
      while (!result || result.status?.id <= 2) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
        const resultResponse = await axios.get(`${apiUrl}/submissions/${token}`, {
          headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
        });
  
        result = resultResponse.data;
      }
  
      setOutput(result.stdout || result.stderr || "No output.");
    } catch (error) {
      setOutput("Error running code. Please try again.");
      console.error("Run Code Error:", error.response || error);
    }
  
    setIsLoading(false);
  };
  

  // Determine the language extension for CodeMirror
  const getLanguageExtension = () => {
    switch (language) {
      case "javascript":
        return javascript();
      case "python":
        return python();
      case "cpp":
      case "c":
        return cpp();
      default:
        return javascript();
    }
  };

  // Handle theme toggle
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  // Handle language change
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setCode(languageTemplates[selectedLanguage]); // Set default template
  };

  return (
    <div className={`coding-practice-container ${isDarkTheme ? "dark" : "light"}`}>
      <h2>Coding Practice</h2>

      {/* Language Selector */}
      <select
        value={language}
        onChange={handleLanguageChange}
        className="language-selector"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="c">C</option>
        <option value="java">Java</option>
      </select>

      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className="theme-toggle-button">
        {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Code Editor */}
      <CodeMirror
        value={code}
        height="300px"
        theme={isDarkTheme ? oneDark : githubLight}
        extensions={[getLanguageExtension()]}
        onChange={(value) => setCode(value)}
      />

      {/* Action Buttons */}
      <div className="coding-buttons">
        <button onClick={handleSaveCode} disabled={isLoading}>
          Save Code
        </button>
        <button onClick={handleRunCode} disabled={isLoading}>
          {isLoading ? "Running..." : "Run Code"}
        </button>
      </div>

      {/* Output */}
      <div className="output-container">
        <h3>Output</h3>
        <pre>{output}</pre>
      </div>

    
    </div>
  );
};

export default Coding;
