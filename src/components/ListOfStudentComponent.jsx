import React from 'react';
import StudentService from '../StudentService/StudentService.js';
import { Navigate ,useNavigate } from 'react-router-dom';


const YourComponent = () => {
  const navigate = useNavigate();

  return <ListOfStudentComponent navigate={navigate} />;
};
  
class ListOfStudentComponent extends React.Component {

 

    constructor(props) {
        super(props);
        this.state =
        {
            student: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent =this.editStudent.bind(this);
        this.deleteStudent=this.deleteStudent.bind(this);
         this.viewStudent=this.viewStudent.bind(this);
    }
    
    viewStudent(id){
      const{ navigate } = this.props;
      navigate(`/view-student/${id}`);
    }

    editStudent(id) {
      const { navigate } = this.props;
      navigate(`/update-student/${id}`);
    }
    componentDidMount()
    {
      StudentService.getstudent().then((res)=>{
          this.setState({student: res.data})
      });
    }

    addStudent() {
      this.setState({ navigateToAddStudent: true });
    }

    deleteStudent(id){
      StudentService.deleteStudentById(id).then(res =>{
       this.setState({student:this.state.student.filter(student => student.id!==id)});
      })
    }
  
  render() {

    if (this.state.navigateToAddStudent) {
      return <Navigate to="/add-student" />;
    }

    return (
      <div>

            <h2 className='text-center'>Student List</h2>
            <div className='row'>
               <div class="btn-group-toggle" data-toggle="buttons">
                    <button class="btn btn-primary" onClick={this.addStudent}>add student
                      </button>
                    </div>
            </div>
                <table className='table table-bordered'>
                    <thead>
                   <tr class="active">
                    <th>First_Name</th>
                    <th>Last_Name</th>
                    <th>Email</th>
                    <th>Action</th>
                   </tr>
                   </thead>

                   <tbody>
                    {
                  this.state.student.map(
                        student =>
                     <tr key = {student.id}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td><button type="button" class="btn btn-info me-1" onClick = { () => this.editStudent(student.id)} >update</button>
                            <button type="button" class="btn btn-danger me-1" onClick= { () => this.deleteStudent(student.id)}>Delete</button>
                            <button type="button" class="btn btn-danger " onClick={() => this.viewStudent(student.id)}>view</button>
                            </td>
                        </tr>
                    )
                  }
                   </tbody>
                </table>
                </div>
    );
  }

}
 export default YourComponent;
