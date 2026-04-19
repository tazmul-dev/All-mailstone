import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise)
    console.log(users)
    return (
        <div>
            <h1>data load way 2</h1>
        </div>
    );
};

export default Users2;