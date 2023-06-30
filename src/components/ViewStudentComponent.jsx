import React, { Component } from 'react'
import StudentService from '../StudentService/StudentService.js';
import { Navigate,useParams} from 'react-router-dom';

const ViewStudentWrapper = () => {
  const { id } = useParams();

  return <ViewStudentComponent id={id} />;
};

 class ViewStudentComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      id: this.props.id,  
            student:{}
    }
  }
  componentDidMount(){
    StudentService.getStudentById(this.state.id).then(res =>{
      this.setState({student: res.data});
    })
  }
  render() {
    return (
      <div>
        <div class="card" >
          <div className='card-body'>
          <h6 class="card-subtitle mb-2 text-muted ">View Student</h6>
  <div class="card-subtitle mb-2 text-muted">
    <h6 class="card-text">First Name:  <h7>{this.state.student.firstName}</h7></h6>
    <h6 class="card-text">Last Name:   <h7>{this.state.student.lastName}</h7></h6>
    <h6 class="card-text" >Email: <h7>{this.state.student.email}</h7></h6>
    </div>
</div>
</div>
   </div> 
    )
  }
}
export default ViewStudentWrapper;