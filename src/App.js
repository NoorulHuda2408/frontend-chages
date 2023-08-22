// import logo from './logo.svg';
import './App.css';
import Navbar from "./pages/Navbar"
import HeroSection from "./pages/HeroSection.js"
import MainloginPage from "./pages/mainLoginPage/MainloginPage"; 
import Success from './components/Success/Success'
import TOTC from './components/TOTC';
import TeacherTools from "./components/TeacherTools"
function App() {
  return (
    <div className="App">
     {/* <MainloginPage/> */}
     <Navbar/>
     <HeroSection/>
     <Success/>
     <TOTC/>
     <TeacherTools/>
     
    </div>
  );
}

export default App;
