import React, { useState } from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";
import "../App.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo}) {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);

  const [updatedContent, setUpdatedContent] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {

    const request ={
      id : id,
      content : updatedContent  
    }

    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", border: "1px solid lightgray", padding: "10px", marginBottom: "10px" }}>
      <div>
        {editable ? (
          <input
            type="text"
            style={{ width: "380px"}}
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
        {editable ? (
          <FaCheck className='todo-icons' onClick={updateTodo} />
        ) : (
          <FaEdit className='todo-icons' onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;