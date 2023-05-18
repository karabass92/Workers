import axios from "axios";


const BASE_URL = 'http://localhost:5000/api/';


const instance = axios.create(
    {baseURL: BASE_URL}
);


export const workersAPI = {
    // Обработка ошибок
    createWorker(info) {
        return instance.post(`worker`, info)
    },

    getAllWorkers() {
        return instance.get(`worker`)
            .then(response => response.data)
    },

    getOneWorker(workerId) {
        return instance.get(`worker/${workerId}`)
            .then(response => response.data)
    },

    deleteWorker(workerId) {
        return instance.delete(`worker/${workerId}`)
    },

    updateWorkerInfo(workerId, newInfo) {
        return instance.put(`worker/${workerId}`, newInfo)
    }

}