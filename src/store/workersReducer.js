import { workersAPI } from "../api/api";


const SET_ALL_WORKERS = 'SET_ALL_WORKERS';
const DELETE_WORKER = 'DELETE_WORKER';


const initialState = {
    workers: []
};


const workersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_WORKERS:
            return {
                ...state,
                workers: action.workers
            };
        case DELETE_WORKER:
            return {
                workers: [...state.workers.filter(i => i.id !== action.workerId)]
            };
        default:
            return state;
    }
};


const setAllWorkersAC = (workers) => {
    return { type: SET_ALL_WORKERS, workers }
};

const deleteWorkerAC = (workerId) => {
    return {type: DELETE_WORKER, workerId}
};


export const getAllWorkersThunk = () => async (dispatch) => {
    const workers = await workersAPI.getAllWorkers();
    dispatch(setAllWorkersAC(workers));
};

export const deleteWorkerThunk = (workerId) => async (dispatch) => {
    await workersAPI.deleteWorker(workerId);
    dispatch(deleteWorkerAC(workerId));
};



export default workersReducer;