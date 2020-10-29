import {createStore} from 'redux';
import {Reducer} from './redux/reducer';

export const store = createStore(Reducer,  
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
