import React from 'react'
import "../App.css";

const Todo = (props) => {
  

  return (
    <div>
          <div className='listItems'>
              {props.todo.map((item, index) => {
                return <div 
                key={index + 1}
                className='item'
                ><div><span>{index + 1}.</span> {item.text}</div>
                <button type='button' onClick={() => deleteTodo(index + 1)}>X</button>
                </div>
                
              })}
          </div>
        </div>
  )
}

export default Todo