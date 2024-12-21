import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { oneDark } from "@codemirror/theme-one-dark";
import axios from "axios";
import "./Coding.css";

const Coding = ({ userId }) => {
  const [code, setCode] = useState("// Write your code here...");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch saved code when the component loads
  useEffect(() => {
    // Replace with your backend API endpoint
    axios
      .get(`/api/code/${userId}`)
      .then((res) => setCode(res.data.code))
      .catch((err) => console.error("Error fetching saved code:", err));
  }, [userId]);

  // Save the code to the backend
  const handleSaveCode = () => {
    axios
      .post(`/api/code/save`, { userId, code, language })
      .then(() => alert("Code saved successfully!"))
      .catch((err) => console.error("Error saving code:", err));
  };

  // Run code via Judge0 API (or any backend service)
  const handleRunCode = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post("https://api.judge0.com/submissions", {
        source_code: code,
        language_id: language === "javascript" ? 63 : language === "python" ? 71 : 54, // Language IDs for Judge0
        stdin: "",
      });
      const token = response.data.token;

      // Fetch the output using the token
      const result = await axios.get(`https://api.judge0.com/submissions/${token}`);
      setOutput(result.data.stdout || result.data.stderr);
    } catch (error) {
      setOutput("Error running code. Please try again.");
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
        return cpp();
      default:
        return javascript();
    }
  };

  return (
    <div className="coding-practice-container">
      <h2>Coding Practice</h2>

      {/* Language Selector */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="language-selector"
      >
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
        <option value="cpp">C++</option>
      </select>

      {/* Code Editor */}
      <CodeMirror
        value={code}
        height="300px"
        theme={oneDark}
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
