import React, { useState } from "react";
import Zoom                from '@material-ui/core/Zoom';
import Fab                 from '@material-ui/core/Fab';
import AddIcon             from '@material-ui/icons/Add';

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

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
      <form className="create-note">
        {isExpanded && (
        <input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        )}
        <textarea
          onChange={handleChange}
          onClick={() => setIsExpanded(true)}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        {isExpanded &&
        <Zoom in={isExpanded}>
            <Fab onClick={handleSubmit}>
                <AddIcon />
            </Fab>
        </Zoom>
        }
      </form>
    </div>
  );
}

export default CreateArea;
