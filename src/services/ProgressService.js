import axios from "axios";

const PROGRESS_GET_URL="http://localhost:8080/api/progress/getAllProgress"

const PROGRESS_ADD_URL="http://localhost:8080/api/progress/add"

class ProgressService{
    getAllProgress(){
        return axios.get(PROGRESS_GET_URL);
    }
    addProgress(progress){
        return axios.post(PROGRESS_ADD_URL, progress);
    }
}

export default new ProgressService();