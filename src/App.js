import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListOfStudentComponent from './components/ListOfStudentComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
import UpdateStudentComponent from './components/UpdateStudentComponent';
function App() {
  return (
    <div>
      <Router>
        <div class="container">
         
    <HeaderComponent/>
    <div class="container">
    <Routes>
      <Route path="/" exact element={<ListOfStudentComponent/>}/>
        <Route path='/student' element={<ListOfStudentComponent />} />
        <Route path='/add-student' element ={<CreateStudentComponent />} />
        <Route path='/update-student/:id' element={< UpdateStudentComponent />} />
        <Route path='/view-student/:id' element={<ViewStudentComponent/>}/>
        </Routes>

    </div>
    <FooterComponent/>
    </div>
    </Router>
    </div>
  );
}

export default App;
