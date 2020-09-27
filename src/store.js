import {applyMiddleware, createStore} from 'redux';
import {notesReducer} from "./notesReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

export const store = createStore(notesReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
))
