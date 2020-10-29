import React from 'react';
import { useSelector } from 'react-redux';
import ToDoTask from './todotask';

const ToDoList = () => {
    let todos= useSelector(state=>state)
    return (
        <div className="my-4">
          {todos.map(todo=>{
              return <ToDoTask key={todo.id} todo={todo}/>
          })}
        </div>
    )}
export default ToDoList;

/*export const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)*/
/*const Link = ({ active, children, onClick }) => (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
  )*/