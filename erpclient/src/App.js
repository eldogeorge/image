import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import StudentRegister from './Component/Student/StudentRegister';
import StudentLogin from './Component/Student/StudentLogin';
import StudentHome from './Component/Student/StudentHome';
import Pnf from './Component/Pnf';
import { Datepicker, Input, initTE } from "tw-elements";
import { useEffect } from 'react';
import StudentView from './Component/Student/StudentView';
import StudentEdit from './Component/Student/StudentEdit';
import StudentProfile from './Component/Student/StudentProfile';
import StudentAsgm from './Component/Student/StudentAsgm';

function App() {
  
    useEffect(() => {
      initTE({ Datepicker, Input });
    }, []);
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/StudentStudentHome' element={<StudentHome></StudentHome>}/>
          <Route path='/' element={<StudentLogin></StudentLogin>}/>
          <Route path='/StudentStudentRegister' element={<StudentRegister></StudentRegister>}/>
          <Route path='/Studentview/:id' element={<StudentView></StudentView>}/>
          <Route path='/Studentedit/:id' element={<StudentEdit></StudentEdit>}/>
          <Route path='/StudentStudentProfile' element={<StudentProfile></StudentProfile>}/>
          <Route path='/StudentStudentAssigment' element={<StudentAsgm></StudentAsgm>}/>
          <Route path='*' element={<Pnf></Pnf>}/>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
