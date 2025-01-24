// import { useState } from 'react'
// import Navbar from './components/Navbar'
import {Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact.jsx'
import RootLayout from './components/Layout/RootLayout'
import './App.css'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />

      </Route>
    )
  )

  return (
    // <>
    // <div>
    //   {/* <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/product' element={<Product />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/contact' element={<Contact />} />
    //   </Routes> */}
    // </div>
    // </>
    <RouterProvider router={router} />
 
    
  )
}

export default App
