import React from 'react'
import "../App.css";

const Todo = ({todos, index, deleteItem, id}) => {
  return (
    <div>
          <div className='listItems'>
            <div className='item'>
              <div><span>{todos.id}. </span>{todos.text}</div><span>X</span>
            </div>
          </div>
        </div>
  )
}

export default Todo