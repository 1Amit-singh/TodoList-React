import React, { useEffect, useState } from 'react'
import "./App.css";
import Todo from './Components/Todo';
import ToggleSwitch from './ToggleSwitch';
import axios from 'axios';


const App = () => {
 
  const r = document.querySelector(":root");

  function changeTheme(){
    const rs = getComputedStyle(r);
    if(rs.getPropertyValue("--bg-color") === "#121212"){
      r.style.setProperty("--bg-color", "#F0ECE5");
      r.style.setProperty("--fg-color", "#252627");
      r.style.setProperty("--border-color", "#252627");
    }
    else{
      r.style.setProperty("--bg-color", "#121212");
      r.style.setProperty("--fg-color", "#f4f2f2");
      r.style.setProperty("--border-color", "#c45834");
    }
  }


  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");
  // const [idCounter, setIdCounter] = useState(4);

  const url = "https://api.jsonbin.io/v3/b/";
  const key = "64f0416c8d92e126ae652a2c";

  const fetchTodos = async () => {
    const res = await axios.get(url + key);
    await setTodos(res.data.record.items);
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  const handleChange = (event) => {
    setInputVal(event.target.value)
  }

  const handleClick = async (event) => {
    event.preventDefault();
    if (inputVal === "") return;
    const newId = todos.length + 1;
    const newTodo = {text: inputVal, id: newId};
    // setIdCounter(idCounter+1);s
    setTodos([...todos, newTodo]);
    setInputVal("")
  }

  const deleteItem = (key) => {
    // console.log(key);
    const newTodo = todos.filter(todo => {
      return (key !== todo.id)})

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
          <Todo todos={todos} index={index} deleteItem={deleteItem} key={index} />
        ))}
      </form>
      <ToggleSwitch changeTheme={changeTheme} />
    </div>
  )
}

export default App