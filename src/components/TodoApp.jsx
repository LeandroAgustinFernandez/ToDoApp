import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodosContainer from "./TodosContainer";
import "./TodoApp.css";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [valid, setValid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "") {
      setValid(true);
      return;
    }
    let newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setValid(false);
  }

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function editTodo(editTodo) {
    setTodoList((todoList) =>
      todoList.map((todo) => {
        if (todo.id === editTodo.id) todo.title = editTodo.title;
        return todo;
      })
    );
  }

  function deleteTodo(e) {
    let id = e.target.dataset.id;
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  return (
    <div className="container">
      <h1 className="title">ToDo App</h1>
      <section>
        <TodoForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          title={title}
          valid={valid}
        />
        <TodosContainer
          todoList={todoList}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      </section>
    </div>
  );
};

export default TodoApp;
