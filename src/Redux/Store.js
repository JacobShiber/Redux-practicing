import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import MainReducer from './Reducers/Index';

const middleWere = [thunk]

const store = createStore(MainReducer, {
    todos: [
        { title: "do action", isComplete: false },
        { title: "do another", isComplete: false }
    ]
},
compose(applyMiddleware(...middleWere))
);

export default store;