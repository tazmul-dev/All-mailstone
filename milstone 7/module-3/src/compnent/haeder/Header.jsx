import React from 'react';
import { NavLink, } from 'react-router';
import './Nav.css'

const Header = () => {
    return (
        <div className=''>
            <h1 className=' text-2xl'>This header</h1>

          <nav className=' space-x-4'>
            <NavLink to ='/home'>Home</NavLink>
            <NavLink to ='/about'>About</NavLink>
            <NavLink to ='/blog'>Blog</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/users2'>Users2</NavLink>

          </nav>
           
           
        </div>
    );
};

export default Header;<h1>This header</h1>