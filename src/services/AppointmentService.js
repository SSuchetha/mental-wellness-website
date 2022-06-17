import axios from "axios";

const APPOINTMENT_API_BASE_URL="http://localhost:8080/api/app/appointments";

class AppointmentService{
    createAppointment(appointment){
        return axios.post(APPOINTMENT_API_BASE_URL , appointment); 
    }
}

export default new AppointmentService();