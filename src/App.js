import React from 'react';
import './App.css';
import ToDoList from './components/todotask';
//import ToDoTask from './components/todotask';
import 'bootstrap/dist/css/bootstrap.css';
import {AddTask} from './components/Addtask';

function App() {
 
  return (
    <div className="App m-5">   
    <AddTask/>
    <ToDoList/>
    </div>
  );
}

export default App;
