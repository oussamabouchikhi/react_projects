import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(previousValue => {
        return {
            ...previousValue,
            [name]: value
        }
      }
    );
  }

  function handleSubmit(event) {
    // Send newly created note to App
    props.onAdd(note);
    // Clear inputs after submit
    setNote({ title: "", content: "" });
    // Prevent page from refreshing
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
