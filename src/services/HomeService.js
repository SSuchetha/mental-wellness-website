import axios from "axios";

const MESSAGE_API_BASE_URL="http://localhost:8080/api/msg/message";

class HomeService{
    createMessage(){
        return axios.get(MESSAGE_API_BASE_URL);
    }
}

export default new HomeService();