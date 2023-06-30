import React, { Component } from 'react'
import StudentService from '../StudentService/StudentService.js';
import { Navigate,useParams} from 'react-router-dom';

const UpdateStudentWrapper = () => {
  const { id } = useParams();

  return <UpdateStudentComponent id={id} />;
};
 class UpdateStudentComponent extends Component {
  
    constructor(props) {
        super(props);
        this.state={
          id: this.props.id,  //.match.params
                firstName:'',
                lastName:'',
                email:''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.UpdateStudent=this.UpdateStudent.bind(this);
      }
      componentDidMount(){
        StudentService.getStudentById(this.state.id).then((res)=>{
          let student = res.data;
          this.setState({firstName:student.firstName,
             lastName: student.lastName,
             email:student.email
        })
        });
      
      }
      UpdateStudent=(e)=>{
        e.preventDefault();
        let student ={firstName:this.state.firstName,lastName: this.state.lastName,email: this.state.email};
        console.log('student =>' +JSON.stringify(student));
    
    
      StudentService.updateStudent(student,this.state.id).then(res => {
        this.setState({ navigateToUpdateStudent: true });
      });
    }
       changeFirstNameHandler=(event) =>{
        this.setState({firstName:event.target.value});
       }
       changeLastNameHandler=(event) =>{
        this.setState({lastName:event.target.value});
       }
       changeEmailHandler=(event) =>{
        this.setState({email:event.target.value});
       }
       cancel(){
        this.setState({ navigateTostudent: true });
       }
        render() {

          if (this.state.navigateToUpdateStudent) {
            return <Navigate to={'/student'} />;
          }
          if (this.state.navigateTostudent) {
            return <Navigate to="/student" />;
          }
        return (
          <div>

             <div className='container'>
              <div className='row'>

              <div class="card w-50">
      <div class="card-body">
        <h5 class="card-title">Update student</h5>

                <form>
      <div class="form-group row">
      <label class="custom-control-label" for="customControlInline">FirstName</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="First name"  value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
      </div>
        <label class="custom-control-label" for="customControlInline" >LastName</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" placeholder="Last name" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
    </div>
        <label for="formControlRange" >Email</label>
        <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Email" value={this.state.email} onChange={this.changeEmailHandler}/>
      </div>
      </div><br></br>

      <div class="form-group row">
        <div class="d-grid gap-2 d-md-flex">
          <button type="submit" class="btn btn-primary" onClick={this.UpdateStudent}>SAVE</button>
          <button type="submit" class="btn btn-primary " onClick={this.cancel.bind(this)}>cancel</button>
        </div>
      </div>
                </form>
                </div>
                </div>
              </div>
              </div>
             </div>
           
        )
      }
    }
    export default UpdateStudentWrapper;