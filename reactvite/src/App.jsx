import React from 'react'
import ColorChange from './components/ColorChange'
import MyState from './components/MyState'
import Clg from './components/clg'
import ImageManipulation from './components/ImageManipulation'
import FetchProducts from './components/FetchProducts'
import  {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Home from './components/Home'

function App() {
  return (
   <>
   <div>
    {/* <Clg /> */}
    {/* <ImageManipulation /> */}
    {/* <FetchProducts/> */}
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Registration/>}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App