import React, { useState } from "react";
import TodoItem            from "./TodoItem";
import InputArea           from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(previousItems => [...previousItems, inputText]);
  }

  function deleteItem(id) {
    // Return items array without this particular item
    setItems(prevItems => prevItems.filter((item, index) => index !== id));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
