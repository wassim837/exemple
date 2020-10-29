const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO='EDIT_TODO';
const TOGGLE ='TOGGLE';


export const addTodo =(todo)=>{
   return {
       type : ADD_TODO,
      payload: todo,
   }
}
   export const deleteTodo =(todoId)=>{
       return {
           type : DELETE_TODO,
          payload: todoId,
       }
   }
   export const editTodo =(todo)=>{
    return {
        type : EDIT_TODO,
       payload: todo,
    }
}
export const toggle =(todo)=>{
    return {
        type : TOGGLE,
       payload: todo,
    }
}
/*export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })
  
  export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
  })
  
  export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }*/