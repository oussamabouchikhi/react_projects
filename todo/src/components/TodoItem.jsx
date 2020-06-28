import React, { useState } from "react";

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone(previousValue => !previousValue);
  }

  return (
    <li
      style={{ textDecoration: isDone ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;
