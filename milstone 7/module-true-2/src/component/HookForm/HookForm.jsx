
import React from 'react';
import useInputfield from '../../Hooks/useInputfield';

const HookForm = () => {
     const [name, nameOnchage] = useInputfield('')
     const [email, emailOnchage] = useInputfield('')
     const [pass, passOnchage] = useInputfield('')
    const handelSubmit = (e)=>{
    e.preventDefault()
    console.log(name, email, pass)
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnchage} />
                <br />
               <input defaultValue={email} type="email" name="email" onChange={emailOnchage}  />
                <br />
                <input defaultValue={pass} onChange={passOnchage} type="password"  />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;