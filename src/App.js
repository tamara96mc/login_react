
import './App.css';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
