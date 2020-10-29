import React,{useState} from 'react';
import { addTodo } from '../redux/actions';
import {useDispatch} from 'react-redux';

export function AddTask() {
    let  dispatch = useDispatch();
let [description, setDescription]= useState();
    return (
  <div className='row m-2'>
  <input type='text'className='col from-control' value={description} onChange={(e)=>setDescription(e.target.value)}/>
   <button className='btn btn-primary mx-2'onClick={()=>{dispatch(addTodo({description:description,id:Math.random()}))
   setDescription();}}>Add</button>
  </div>


);}



