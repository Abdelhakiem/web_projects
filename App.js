import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  const messages = [
    "Message 1: This is the first message.",
    "Message 2: This is the second message.",
    "Message 3: This is the third message."
  ];
  function indexIncrement(){
    setIndex(index === messages.length -1? 0:index + 1);
  }
  function indexDecrement(){
    setIndex(index ===0?messages.length -1:index - 1);
  }
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
          <div
            style={{
            width: '40px',
            height: '30px',
            borderRadius: '60%',
            backgroundColor: 'lightblue',
            position: 'relative',
            justifyContent: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            color: 'white',
            textAlign: 'center',
            left: '50%',
            transform: 'translate(-80%, -20%)',
            marginTop: "10px",
            fontSize: "25px",
            }}
          >
            {index + 1}
          </div>
      <div
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "20px",
          borderRadius: "5px",
          margin: "20px auto",
          width: "200px"
        }}
      >
        <p>{messages[index]}</p>
      </div>
      <button onClick={indexDecrement} style={{ marginRight: "10px" }}>
        Prev
      </button>
      <button onClick={indexIncrement}>Next</button>
    </div>
  );

}

export default App;
