import React, { useState } from 'react'
import "./App.css";
import Todo from './Components/Todo';

const App = () => {
  const items = [
    {
      text: "Task1",
      id: 1
    },
    {
      text: "Task2",
      id: 2
    },
    {
      text: "Task3",
      id: 3
    },
  ];

  const [todos, setTodos] = useState(items);
  const [inputVal, setInputVal] = useState("");
  // const [idCounter, setIdCounter] = useState(4);


  const handleChange = (event) => {
    setInputVal(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (inputVal === "") return;
    const newId = todos.length + 1;
    const newTodo = {text: inputVal, id: newId};
    // setIdCounter(idCounter+1);s
    setTodos([...todos, newTodo]);
    setInputVal("")
  }

  const deleteItem = (key) => {
    console.log(key);
    const newTodo = todos.filter(todo => {
      console.log(key, todo.id)
      return (key ==! todo.id)})
    setTodos(newTodo);
  }

  return (
    <div className='container'>
      <form>
        <div>
        <input className='input' placeholder='Enter' value={inputVal} onChange={handleChange} />
        <button className='btn' onClick={handleClick}>Submit</button>
        </div>
        {todos.map((todos, index) => (
          <Todo todos={todos} index={index} deleteItem={deleteItem} key={todos.id} />
        ))}
        
      </form>
    </div>
  )
}

export default App