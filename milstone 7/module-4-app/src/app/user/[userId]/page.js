import Link from 'next/link';
import React from 'react';

const userId = async ({params}) => {
    const {userId} = await params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await res.json()
    console.log(user)
    return (
        <div>
              <h2 className="card-title">{user.name}</h2>
              <p>{user.email}</p>
              <Link href={'/user'} className='btn'>Go back</Link>
        </div>
    );
};

export default userId;