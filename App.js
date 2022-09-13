import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from './components/SignIn';
import Signup from './components/Signup';
import PostView from './components/postview';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>   
    <Routes>
    <Route path="/signup" element={ <Signup/> } />
    <Route path="/signin" element={ <SignIn/> } />
    <Route path="/postview" element={ <PostView/> }/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;































