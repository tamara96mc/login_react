
import './App.scss';


import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Register from './Containers/Register/Register';
import Navbar from './Components/Navbar/Navbar';
import Home from './Containers/Home/Home';
import Pelis from './Containers/Pelis/Pelis'
import Admin from './Containers/Admin/Admin';
import { connect } from 'react-redux';


function App(props) {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route  path="/" element={props.credentials?.user.name ?<Home/> :<Navigate to="/login" />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={props.credentials?.user.name ?<Profile/> :<Navigate to="/login" />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/pelis" element={props.credentials?.user.name ?<Pelis/> :<Navigate to="/login" />}/>
          <Route path="/admin"  element={props.credentials?.user.name ?<Admin/> :<Navigate to="/login" />}/>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default connect((state) => ({
  credentials: state.credentials
}))(App);
