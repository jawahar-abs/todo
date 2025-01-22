import { TodoReducer,ThemeReducer } from "./reducers/Todoreducer";
import {combineReducers, createStore } from "redux";
export const rootReducer = combineReducers({
    todoList:TodoReducer,
    theme:ThemeReducer
})
const store = createStore(rootReducer)
export default store