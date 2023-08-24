// import logo from './logo.svg';
import './App.css';
import Navbar from "./pages/Navbar"
import HeroSection from "./pages/HeroSection.js"
import MainloginPage from "./pages/mainLoginPage/MainloginPage"; 
import Success from './components/Success/Success'
import TOTC from './components/TOTC';
import TeacherTools from "./components/TeacherTools";
// import Assesments from "./components/Assesment";
import Assesments from "./components/Assesment/Assesment";
import One from "./components/One/One"
import ClassManagement from './components/ClassManagement/ClassManagement';
import Cloud from "./components/Cloud/Cloud"
import Footer from "./components/Footer/Footer"
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
     {/* <MainloginPage/> */}
     {/* <Navbar/>
     <HeroSection/>
     <Success/>
     <Cloud/>
     <TOTC/>
     <TeacherTools/>
     <Assesments/>
     <ClassManagement/>
     <One/>
     <Footer/> */}
     
     <Router>
    <Routes>
        <Route exact path="/" element={<MainloginPage />} />
         <Route exact path="/dashboard" element={<Dashboard />} />
    
    </Routes>
</Router>

    </div>
  );
}

export default App;
