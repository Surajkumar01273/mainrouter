// import { useState } from 'react'
// import Navbar from './components/Navbar'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
// import Contact from './pages/Contact.jsx'
import RootLayout from './components/Layout/RootLayout'
// import RouteComp from './routes/index.jsx'
import './App.css'
import ContactLayout from './components/Layout/contactLayout.jsx'
import ContactForm from './components/ContactForm.jsx'
import Info from './components/info.jsx'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactLayout />} >
          <Route path='info' element={<Info />} />
          <Route path='contactform' element={<ContactForm />} />
        </Route>

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
    // <RouterProvider router={router} />
      <RouterProvider router={router} />


  )
}

export default App
