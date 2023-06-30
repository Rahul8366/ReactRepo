import axios from 'axios';
const URL="http://localhost:8080/sms/student";

 class StudentService {
  getstudent(){
    return axios.get(URL);
  }

  CreateStudent(student){
    return axios.post(URL,student)
  }

  getStudentById(id){
    return axios.get(URL+'/'+id)
  }

  updateStudent(student,id){
    return axios.put(URL+'/'+id,student)
  }
  deleteStudentById(id){
    return axios.delete(URL+'/'+id)
  }
}

const instance = new StudentService();
export default instance;