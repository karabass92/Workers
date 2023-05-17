import { workersAPI } from "../api/api";


const SET_WORKER_INFO = 'SET_WORKER_INFO';
const UPDATE_WORKER_INFO = 'UPDATE_WORKER_INFO';


const initialState = {
    workerInfo: null,
}


const updateWorkerInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORKER_INFO:
            return {
                ...state,
                workerInfo: action.info
            };
        case UPDATE_WORKER_INFO:
            return {
                ...state,
                workerInfo: action.info
            };
        default:
            return state;
    }
};


const setWorkerInfoAC = (info) => {
    return { type: SET_WORKER_INFO, info }
};

const updateWorkerInfoAC = (info) => {
    return { type: UPDATE_WORKER_INFO, info}
}


export const getWorkerInfoThunk = (id) => async (dispatch) => {
    const info = await workersAPI.getOneWorker(id);
    dispatch(setWorkerInfoAC(info));
};


export const updateWorkerInfoThunk = (id, data) => async (dispatch) => {
    workersAPI.updateWorkerInfo(id, data);
    dispatch(updateWorkerInfoAC(data))
};


export default updateWorkerInfoReducer;