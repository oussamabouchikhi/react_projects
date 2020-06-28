import React, { useState } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  function updateText(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(previousItems => {
      return [...previousItems, inputText];
    });
    // Clear input after submit
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={updateText} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(item => 
           <TodoItem item={item} />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
