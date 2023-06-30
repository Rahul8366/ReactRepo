import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import StudentService from '../StudentService/StudentService.js';

 class CreateStudentComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
            firstName:'',
            lastName:'',
            email:''
    }
    this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
    this.changeEmailHandler=this.changeEmailHandler.bind(this);
    this.saveStudent=this.saveStudent.bind(this);
  }
  saveStudent=(e)=>{
    e.preventDefault();
    let student ={firstName:this.state.firstName,lastName: this.state.lastName,email: this.state.email};
    console.log('student =>' +JSON.stringify(student));

  
  StudentService.CreateStudent(student).then(res => {
    this.setState({ navigateToCreateStudent: true });
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
      if (this.state.navigateToCreateStudent) {
        return <Navigate to="/student" />;
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
    <h5 class="card-title">Add student</h5>
            
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
      <button type="submit" class="btn btn-primary" onClick={this.saveStudent}>SAVE</button>
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
export default CreateStudentComponent; 