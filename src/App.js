// import logo from './logo.svg';
import './App.css';
import MainloginPage from "./pages/mainLoginPage/MainloginPage"; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Teacherprofile from './pages/Teacher/Teacherprofile/Teacherprofile';
import Notification from "./pages/Teacher/Request/Request";
import StudentResult from "./pages/Teacher/StudentResult/StudentResult";
import StudentRegister from "./pages/Student/Profile/Register";
import Searchtutor from './pages/Student/Search Tutor/Searchtutor';
import Packages from "./pages/Student/Packages/Packages";
import ViewProgress from "./pages/Student/View Result/Viewprogress";

function App() {
  return (
    <div className="App">
  
     <Router>
    <Routes>
        <Route exact path="/login" element={<MainloginPage />} />
         <Route exact path="/" element={<Dashboard />} />
         <Route exact path="/teacherprofile" element={<Teacherprofile />} />
         <Route exact path="/Notification" element={<Notification />} />
         <Route exact path="/StudentResult" element={<StudentResult />} />
         <Route exact path="/StudentRegistration" element={<StudentRegister />} />
         <Route exact path="/Searchtutor" element={<Searchtutor />} />
         <Route exact path="/Packages" element={<Packages />} />
         <Route exact path="/ViewProgress" element={<ViewProgress />} />
       
        
    </Routes>
</Router>

    </div>
  );
}

export default App;
