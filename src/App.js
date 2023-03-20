import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home"
import Dashboard from "./components/dashboard"
import Analytics from "./components/analytics"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path='/dashboard' element={ <Dashboard />} />
        <Route path='/analytics' element={ <Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
