import React from 'react';
import Header from '../haeder/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex gap-4'>
            <div>
                <p>saide bar 1</p>
                <p>saide bar 2</p>
                <p>saide bar 3</p>
                <p>saide bar 4</p>
            </div>
            <Outlet></Outlet>
            </div>
            
           <Footer></Footer>
        </div>
    );
};

export default Root;