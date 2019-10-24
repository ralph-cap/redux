import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo }) => (
  <div className="todolist">
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  </div>
)

export default TodoList
