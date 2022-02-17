import { combineReducers } from "redux";
import todosReducer from './Todos';

const MainReducer = combineReducers({
    todos : todosReducer
})

export default MainReducer;