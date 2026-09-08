import React from 'react'
import Main from './Page/Main'
import { Course } from './Page/Course';
import Navbar from './Navigation/Navbar';
import Details from './Page/Details';
import Form from './Form/Form';
import Fake from './Api/Fake';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Section from './Section/Section';

const App = () => {
  return (
    <>
    
    <Router>

      <div> This is App.jsx!!!! </div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/course/:id' element={<Details/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/fake' element={<Fake/>}/>
        <Route path='/section' element={<Section/>} />
      </Routes>

    </Router>

    <ToastContainer 
      position='top-right'
      autoClose={1000}
      theme='light'/>
    </>
  )
}

export default App