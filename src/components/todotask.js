import React,{useState} from 'react';
 import {useDispatch, useSelector} from 'react-redux';
import { deleteTodo, editTodo, toggle} from '../redux/actions';
import {Button} from "react-bootstrap";

function ToDoTask({todo}){
    const [edit, setEdit] = useState(false);
    const [description, setDescription] = useState(todo.description);
    const chiked=useSelector((state)=>state.chiked)
    let dispatch = useDispatch();
    return(
        <div>
<div className='row mx-2 align-items-center'>
    <div className='col'>{edit ? <input text='text' value={description } 
    onChange={(e)=>setDescription(e.target.value)}
    className='form-control'/> : <h4>{todo.description}</h4>}</div>
    <Button variant="secondary" onClick={()=>dispatch(toggle())}>Chiked</Button>
   <button className="btn btn-primary m-2" onClick={()=>{dispatch(editTodo({
       ...todo, description:description
   }));
   if(edit){
       setDescription(todo.description);
   }
   setEdit(!edit);
   }}>{edit? "Update": "Edit"}</button>
   <button  className="btn btn-danger m-2" onClick={()=>dispatch(deleteTodo(todo.id))} >delete</button>
</div>
</div>
 )
}

export default ToDoTask;