import React from "react";

import './App.css';

import { BrowserRouter,Routes,Route} from 'react-router-dom';


import LoginForm from "./Auth/Signin/signin";
import RegistrationForm from "./Auth/signup/signup";
import LandingPage from "./Components/Landingpage/Lpheader/landingpage";
import Dashboard from "./Components/Landingpage/Dashboard/dashboard";






function App() {
  
  return (
    <div className='App'>
    
 <BrowserRouter>
 <Routes>
 
 <Route path='/' element={<LandingPage/>}></Route>
  <Route path='/login' element={<LoginForm/>}></Route>
  <Route path='/signup' element={<RegistrationForm/>}></Route> 
  <Route path='/dashboard' element={<Dashboard/>}></Route> 
  
  
 </Routes>
 </BrowserRouter>
 
 </div>
  );
}

export default App
