import React from "react";
import "./TodoForm.css";

const TodoForm = ({ handleSubmit, handleChange, title, valid }) => {
  return (
    <article className="form">
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="form-input"
          value={title}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </form>
      {valid && <p>El campo no puede estar vacío.</p>}
    </article>
  );
};

export default TodoForm;
