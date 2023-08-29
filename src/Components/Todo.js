import React from 'react'
import "../App.css";

const Todo = ({todos, index, deleteItem }) => {

  return (
          <div className='listItems'>
            <div className='item'>
              <div><span>{index + 1}. </span>{todos.text}</div><span className='deleteBtn' onClick={() => deleteItem(todos.id)}>X</span>
            </div>
          </div>
  )
}

export default Todo