import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { text: inputValue, checked: false }]);
      setInputValue('');
    }
  };

  const clearList = () => {
    setItems([]);
  };

  const toggleItemCheck = (index) => {
    const newItems = items.map((item, i) => 
      i === index ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };


  const TodoItem = ({ item, toggleItemCheck, deleteItem }) => {
    return (
      <li style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={toggleItemCheck}
          style={{ marginRight: '10px' }}
        />
        <span style={{ textDecoration: item.checked ? 'line-through' : 'none', flexGrow: 1 }}>
          {item.text}
        </span>
        <button onClick={deleteItem} style={{ marginLeft: '10px' }}>Delete</button>
      </li>
    );
  };
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={addItem}>Add</button>
        <button onClick={clearList}>Clear List</button>
      </div>
      { <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            toggleItemCheck={() => toggleItemCheck(index)}
            deleteItem={() => deleteItem(index)}
          />
        ))}

      </ul> }
    </div>
  );
};

export default App;
