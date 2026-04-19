import React from 'react';
import {useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const users = useLoaderData()
    // use useNavigate for page back.
    const navigate = useNavigate()
    return (
        <div>
            <h1 className='text-2xl'>user details</h1>
            <div>
                <h1>{users.name}</h1>
                <p>{users.phone}</p>
                <button className='' onClick={()=>navigate(-1)}>go back</button>
            </div>
        </div>
    );
};

export default UserDetails;