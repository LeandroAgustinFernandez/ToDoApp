import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ todo, edit, del }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [valid, setValid] = useState(false);

  function handleChange(e) {
    setNewTitle(e.target.value);
  }

  function handleEdit(e) {
    if (newTitle === "") {
      setValid(true);
      return;
    }
    if (isEdit) {
      todo.title = newTitle;
      edit(todo);
    }
    setIsEdit(!isEdit);
    setValid(false);
  }

  return (
    <article className="todo">
      <div className="todo-container">
        {isEdit ? (
          <input
            type="text"
            value={newTitle}
            onChange={handleChange}
            className="todoTitle"
          />
        ) : (
          <p className="todoTitle">{todo.title}</p>
        )}
        <button onClick={handleEdit} className="btn btn-edit">
          {isEdit ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-save"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
              <polyline points="17 21 17 13 7 13 7 21"></polyline>
              <polyline points="7 3 7 8 15 8"></polyline>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-edit-3"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          )}
        </button>
        <button data-id={todo.id} onClick={del} className="btn btn-del">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-trash-2"
            data-id={todo.id} 
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
      {valid && <p>El campo no puede quedar vacío.</p>}
    </article>
  );
};

export default Todo;
