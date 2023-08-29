import React, { useState } from 'react'
import "./App.css";
import Todo from './Components/Todo';

const App = () => {
  const items = [
    {
      text: "Text1",
      id: 1
    },
    {
      text: "Text2",
      id: 2
    },
    {
      text: "Text3",
      id: 3
    },
  ];

  const [todo, setTodo] = useState(items);
  const [inputVal, setInputVal] = useState("");


  const handleChange = (event) => {
    setInputVal(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (inputVal === "") return;
    const newTodo = {text: inputVal, id: 3};
    setTodo([...todo, newTodo]);
    setInputVal("")
  }

  return (
    <div className='container'>
      <form>
        <div>
        <input className='input' placeholder='Enter' value={inputVal} onChange={handleChange} />
        <button className='btn' onClick={handleClick}>Submit</button>
        </div>
        <Todo todo={todo} setTodo={setTodo} />
        
      </form>
    </div>
  )
}

export default App