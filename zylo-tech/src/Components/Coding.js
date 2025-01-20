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
import { FaKeyboard } from 'react-icons/fa';


const Coding = ({ userId }) => {
  const [code, setCode] = useState("// Write your code here...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [userInput, setUserInput] = useState(""); // State for user input

  const apiKey = "08b860f405mshbb8068011874f25p13e3d4jsn1787c4e29b41";
  const apiUrl = "https://judge0-ce.p.rapidapi.com";

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

  useEffect(() => {
    axios
      .get(`/api/code/${userId}`)
      .then((res) => setCode(res.data.code))
      .catch((err) => console.error("Error fetching saved code:", err));

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

  const handleSaveCode = () => {
    axios
      .post(`/api/code/save`, { userId, code, language })
      .then(() => alert("Code saved successfully!"))
      .catch((err) => console.error("Error saving code:", err));
  };

  const getLanguageId = () => {
    switch (language) {
      case "javascript":
        return 63;
      case "python":
        return 71;
      case "cpp":
        return 54;
      case "java":
        return 62;
      case "c":
        return 50;
      default:
        return 63;
    }
  };

  const handleRunCode = async () => {
    setIsLoading(true);
    setOutput(""); 

    try {
      const encodedCode = btoa(code);

      const submissionResponse = await axios.post(
        `${apiUrl}/submissions?base64_encoded=true&wait=false`,
        {
          source_code: encodedCode,
          language_id: getLanguageId(),
          stdin: userInput,
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

      let result = null;
      while (!result || result.status?.id <= 2) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
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

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    setCode(languageTemplates[selectedLanguage]);
  };

  return (
    <div className={`coding-practice-container ${isDarkTheme ? "dark" : "light"}`}>
      <h2>Coding Practice</h2>

      <select value={language} onChange={handleLanguageChange} className="language-selector">
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="c">C</option>
        <option value="java">Java</option>
      </select>

      <button onClick={toggleTheme} className="theme-toggle-button">
        {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      <CodeMirror
        value={code}
        height="300px"
        theme={isDarkTheme ? oneDark : githubLight}
        extensions={[getLanguageExtension()]}
        onChange={(value) => setCode(value)}
      />

      <div className="custom-input-area">
        <label htmlFor="user-input" className="input-label">
          <FaKeyboard size={20} /> Provide Input
        </label>
        <textarea
          id="user-input"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter input for your program (e.g., 5 10 15)"
          className="user-input"
        ></textarea>
      </div>

      <div className="coding-buttons">
        <button onClick={handleSaveCode} disabled={isLoading}>
          Save Code
        </button>
        <button onClick={handleRunCode} disabled={isLoading}>
          {isLoading ? "Running..." : "Run Code"}
        </button>
      </div>

      <div className="output-container">
        <h3>Output</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default Coding;
