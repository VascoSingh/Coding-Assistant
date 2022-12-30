import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import Code from "../components/code.js";
import { useState } from 'react';
import { Select } from '@chakra-ui/react'

const Home = () => {
  const [userInput, setUserInput] = useState('')
  const [apiOutput, setApiOutput] = useState('')
  const [apiOutputCode, setApiOutputCode] = useState('')
const [isGenerating, setIsGenerating] = useState(false)

const callGenerateEndpoint = async () => {
  setIsGenerating(true);
  
  console.log("Calling OpenAI...")
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userInput }),
  });

  const data = await response.json();
  console.log(`${data.code.text}`);
  const outputCode = data.code.text;
  const outputSumm = data.summ.text;
  setApiOutput(`${outputSumm}`);
  setApiOutputCode(`${outputCode}`);
  setIsGenerating(false);
}
  const onUserChangedText = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };
  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Stuck on a coding problem?</h1>
          </div>
          <div className="header-subtitle">
            <h2>Ask a question like: How would I find if a given number is a palindrome in C++?</h2>
          </div>
        </div>
        <div className="prompt-container">
  <textarea
    placeholder="start typing here"
    className="prompt-box"
    value={userInput}
    onChange={onUserChangedText}
  />
  <div className="prompt-buttons">
  <Select placeholder='Select language'>
  <option value='option1'>Python</option>
  <option value='option2'>Java</option>
  <option value='option3'>C++</option>
</Select>
  <a
    className={isGenerating ? 'generate-button loading' : 'generate-button'}
    onClick={callGenerateEndpoint}
  >
    <div className="generate">
    {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
    </div>
  </a>
</div>
  {apiOutput && (
  <div className="output">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Code</h3>
      </div>
      <Code code={apiOutputCode} language="python" />
    </div>
    <div className="output-header-container">
      <div className="output-header">
        <h3>Explanation</h3>
      </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
    </div>
  </div>
)}
</div>
      </div>
    </div>
  );
};

export default Home;
