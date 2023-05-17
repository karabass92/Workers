import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleWare from 'redux-thunk';
import workersReducer from "./workersReducer";
import updateWorkerInfoReducer from "./updateWorkerInfoReducer";


const reducers = combineReducers({
    workers: workersReducer,
    worker: updateWorkerInfoReducer,
});


const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store


export default store;