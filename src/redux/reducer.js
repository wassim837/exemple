
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO='EDIT_TODO';
const TOGGLE ='TOGGLE';

let todos = [{
    description : 'this is the first discription',
    id : Math.random(),
    chiked: false
}];
export let Reducer= (state = todos, action ) =>{

    let newTodos;
    switch (action.type){
       case ADD_TODO :
         newTodos= [...state];
        newTodos.push(action.payload);
    return newTodos;
        
        case DELETE_TODO :
         newTodos= [...state];
            newTodos = newTodos.filter(todo=>todo.id !== action.payload)
            return newTodos;
                 case EDIT_TODO:
                    newTodos= [...state];
                    let index = -1;
                    for(let i=0; i<newTodos.length ; i++){
                        index ++;
                        if(newTodos[i].id ===action.payload.id){
                            break;   
                           }}
                    if(index !== -1){
                        newTodos[index]= action.payload;
                        return  newTodos
                    }
                    case TOGGLE:
                      return { ...state, chiked: !state.chiked};
                  /* case 'TOGGLE_TODO':
                    return state.map(todo =>
                      todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                    )*/
                }
            return state;

}
 /*const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }
  export default visibilityFilter;*/