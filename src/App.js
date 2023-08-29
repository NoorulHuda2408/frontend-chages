// import logo from './logo.svg';
import './App.css';
import MainloginPage from "./pages/mainLoginPage/MainloginPage"; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
  
     <Router>
    <Routes>
        <Route exact path="/login" element={<MainloginPage />} />
         <Route exact path="/" element={<Dashboard />} />
    </Routes>
</Router>

    </div>
  );
}

export default App;
