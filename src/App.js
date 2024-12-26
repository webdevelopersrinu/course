import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Home from './components/Home';
import Founders from './components/Team';
import CourseDashboard from './components/CourseDashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path='/home' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route exact path='/team' element={<Founders />} />
        <Route path="/course-dashboard/:courseId" element={<CourseDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
