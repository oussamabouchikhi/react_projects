import React from "react";
import ReactDOM from "react-dom";

let count = 0;

function increase() {
  count++;
  console.log(`Count= ${count}`);
  // Re-render DOM to increase counter
  ReactDOM.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>,
    document.getElementById("root")
  );
}

ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);
