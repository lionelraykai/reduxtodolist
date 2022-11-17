import todoReducers from "./TodoReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer;
