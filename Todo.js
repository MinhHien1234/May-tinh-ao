import React from 'react';

function Todo({ todo, toggleComplete, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <button onClick={() => toggleComplete(todo.id)}>Complete</button>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
}

export default Todo;
