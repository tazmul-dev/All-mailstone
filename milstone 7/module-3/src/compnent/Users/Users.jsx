import React from 'react';
import { useLoaderData } from 'react-router';
import User from './user/User';

const Users = () => {
 const users = useLoaderData();
//  console.log(users)
    return (
        <div>
            <h1>data load stape 1</h1>

            {users.map(user => <User user={user}></User>)}
           

        </div>
    );
};

export default Users;