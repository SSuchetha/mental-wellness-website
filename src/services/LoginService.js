import axios from "axios";

const LOGIN_API="http://localhost:8080/api/v1/user/login";

class LoginService{
    login(user){
        return axios.post(LOGIN_API,user);
    }
}

export default new LoginService;