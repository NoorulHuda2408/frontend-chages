// import logo from './logo.svg';
import "./App.css";
import MainloginPage from "./pages/mainLoginPage/MainloginPage";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Teacherprofile from "./pages/Teacher/Teacherprofile/Teacherprofile";
import Notification from "./pages/Teacher/Request/Request";
import StudentResult from "./pages/Teacher/StudentResult/StudentResult";
import StudentRegister from "./pages/Student/Profile/Register";
import Searchtutor from "./pages/Student/Search Tutor/Searchtutor";
import Packages from "./pages/Student/Packages/Packages";
import ViewProgress from "./pages/Student/View Result/Viewprogress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Appointment from "./pages/Student/Request/Appointment";
import MyStudents from "./pages/Teacher/myStudents/Appointment";
import { useEffect } from "react";
import EditStudent from "./pages/Student/editProfileStudent/EditStudent";
import EditTeacher from "./pages/Teacher/editTeacher/EditTeacher";
import TeacherPackages from "./pages/Teacher/TeacherPackages/TeacherPackages";
import Messages from "./pages/Teacher/messages/Messages";
import About from "./pages/About/About";



function App() {
  
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme="light"
      />

      <Router>
        <Routes>
          <Route exact path="/login" element={<MainloginPage />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/teacherprofile" element={<Teacherprofile />} />
          <Route exact path="/Notification" element={<Notification />} />
          {/* <Route exact path="/StudentResult" element={<StudentResult />} /> */}
          <Route
            exact
            path="/StudentRegistration"
            element={<StudentRegister />}
          />
          <Route exact path="/Searchtutor" element={<Searchtutor />} />
          <Route exact path="/Packages/:id" element={<Packages />} />
          <Route exact path="/ViewProgress" element={<ViewProgress />} />
          <Route exact path="/appointment" element={<Appointment />} />
          <Route exact path="/myStudents" element={<MyStudents />} />
          <Route exact path="/editProfile" element={<EditStudent/>} />
          <Route exact path="/editMentor" element={<EditTeacher/>} />
          <Route exact path="/teacherPacakages" element={<TeacherPackages/>} />
          <Route exact path="/messages" element={<Messages/>} />
          <Route exact path="/about" element={<About/>} />





        

       

        </Routes>
      </Router>
    </div>
  );
}

export default App;
