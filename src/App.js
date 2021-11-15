
import './App.scss';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';
import Navbar from './Components/Navbar/Navbar';
import Home from './Containers/Home/Home';
import Pelis from './Containers/Pelis/Pelis'
import Admin from './Containers/Admin/Admin';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/pelis" element={<Pelis/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
