import Todo from "./Todo";
import "./TodosContainer.css";

const TodosContainer = ({ todoList, editTodo, deleteTodo }) => {
  return (
    <div className="todos">
      {todoList.length === 0 ? (
        <h2 className="subtitle">No hay tareas pendientes.</h2>
      ) : (
        todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} edit={editTodo} del={deleteTodo} />
        ))
      )}
    </div>
  );
};

export default TodosContainer;
