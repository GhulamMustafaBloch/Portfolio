import './App.css';
import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
// import Counter from './Components/Counter';

function App() {
  return (
    <>
    <Router basename='/'>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/About' element= {<About/>} />
        <Route path='/Project' element= {<Project/>} /> 
        <Route path='/Contact' element= {<Contact/>} />
      </Routes>
    </Router>
    </>
  )
}
export default App