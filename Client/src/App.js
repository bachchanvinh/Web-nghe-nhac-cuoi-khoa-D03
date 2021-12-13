import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Form from './Form'
import Signin from './Signin'

function App() {
  return (
    <Routes>
      <Route exact path='/signup' element={<Form />} />
      <Route path='/signin' element={<Signin />} />
    </Routes>
  );
}

export default App;
