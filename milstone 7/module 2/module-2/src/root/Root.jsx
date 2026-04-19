import React from 'react';
import Heading from './heading/Heading';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Heading></Heading>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;