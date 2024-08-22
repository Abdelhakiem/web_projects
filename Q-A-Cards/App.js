import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

  const App = () => {
    const [divs, setDivs] = useState([
      { question: "What language is react based on?", answer: "JS", revealed: false },
      { question: "What's the name of the syntax we use to describe a UI in React?", answer: "JSX", revealed: false },
      { question: "How to pass data from parent to child components?", answer: "Props", revealed: false },
      { question: "How to give components memory?", answer: "State", revealed: false },
      { question: "What do we call an input element that is completely synchronized with state?", answer: "Controlled Component", revealed: false },
      { question: "What are the building blocks of React apps?", answer: "Components", revealed: false }
    ]);
  
 
    const handleDivClick = (index) => {
      const newDivs = divs.map((div, i) => ({
        ...div,
        revealed: i === index ? true : false
      }));
      setDivs(newDivs);
    };
  
  
    return (
      <div className="container">
        {divs.map((div, index) => (
          <div
            key={index}
            className="question-box"
            onClick={() => handleDivClick(index)}
            style={{
              backgroundColor: div.revealed ? 'red' : 'grey',
              color: div.revealed ? 'white' : 'black',
              cursor: 'pointer',
              padding: '20px',
              margin: '10px',
              textAlign: 'center',
              borderRadius: '8px',
            }}
          >
            {div.revealed ? div.answer : div.question}
          </div>
        ))}
      </div>
    );
  

  };

export default App;
