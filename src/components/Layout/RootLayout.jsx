import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center'>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootLayout;
