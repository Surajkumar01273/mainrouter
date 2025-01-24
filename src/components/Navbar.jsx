import React from 'react'
import react from '../assets/react.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className='flex justify-between px-10 items-center p-4 bg-gray-800 text-white sticky top-0 z-50'>
                <img src={react} alt="" />
                <ul className='flex gap-10'>
                    <NavLink
                        to='/'
                    >
                        <li className='hover:text-orange-400'>Home</li>
                    </NavLink>

                    <NavLink
                        to='/product'
                    >
                        <li className='hover:text-orange-400'>Product</li>
                    </NavLink>

                    <NavLink
                        to='/about'
                    >
                        <li className='hover:text-orange-400'>About</li>
                    </NavLink>

                    <NavLink
                        to='/contact'
                    >
                        <li className={`hover:text-orange-400`}>Contact Us</li>
                    </NavLink>
                </ul>
                <button className='bg-orange-600 py-2 px-4 rounded-full text-lg text-white'>Get Started</button>
            </div>
        </div>
    )
}

export default Navbar
