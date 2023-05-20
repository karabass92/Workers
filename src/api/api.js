import axios from "axios";


const BASE_URL = 'http://45.136.58.232:7000/api/';


const instance = axios.create(
    {baseURL: BASE_URL}
);


export const workersAPI = {

    createWorker(info) {
        return instance
            .post(`worker`, info)
            .then(response => response)
            .catch(error => console.log(error))
    },

    getAllWorkers() {
        return instance
            .get(`worker`)
            .then(response => response.data)
            .catch(error => console.log(error))
    },

    getOneWorker(workerId) {
        return instance
            .get(`worker/${workerId}`)
            .then(response => response.data)
            .catch(error => console.log(error))
    },

    deleteWorker(workerId) {
        return instance
            .delete(`worker/${workerId}`)
            .catch(error => console.log(error))
    },

    updateWorkerInfo(workerId, newInfo) {
        return instance
            .put(`worker/${workerId}`, newInfo)
            .then(response => response)
            .catch(error => console.log(error))
    }

}