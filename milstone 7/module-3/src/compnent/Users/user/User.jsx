import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    console.log(user)
   
    return (
        <div className='border-2 border-amber-600 p-4 mb-4'>
         <h1 className='text-2xl'>{name}</h1>
         <p>{user.email}</p>
         <p>{user.phone}</p>
         <p>{user.website}</p>
         <Link to={`/users/${user.id}`}>Show Details</Link>
        </div>
    );
};

export default User;