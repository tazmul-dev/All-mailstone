import React, { useState } from 'react';

const Controlled = () => {
    const [error , setError] = useState()
    const [pass, setPass] = useState()

const handelSubmit = (e) =>{
    e.preventDefault()
    console.log('submited')
    if(pass.length < 6){
    setError('not required full fill')
 }else{
    setError()
 }
}
const handelOnchange = (e) =>{
console.log(e.target.value)
 setPass(e.target.value)
 
}



    return (
        <div>
            <form onSubmit={handelSubmit}>
            <input type="email" name="email" id="" placeholder='email' required/> 
            <br />   
           <input type="password" name="password" onChange={handelOnchange} defaultValue={pass} placeholder='password' required />
           <br />
           <input type="submit" value="Submit" />

            </form>
            <p style={{color:'red'}}>
               <small>{error}</small>
            </p>
        </div>
    );
};

export default Controlled;