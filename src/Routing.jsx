import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './page/Home'
import About from './page/About'
import Services from './page/Services'
import Datashow from './Datashow'
import Bookingform from './Bookingform'

const Routing = () => {
  return (
    <>

    <Routes>

      <Route path='/' element={<Layout/>}>

      <Route index element={<Home/>}/>

      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
  <Route path='datashow' element={<Datashow/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='booking' element={<Bookingform/>}/>
    
      <Route path='*' element={<h1>This page is not available</h1>}/>
      
      
      </Route>



    </Routes>

    
    
    
    </>
  )
}

export default Routing