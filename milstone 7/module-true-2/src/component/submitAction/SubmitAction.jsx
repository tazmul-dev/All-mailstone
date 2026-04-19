import React from 'react';

const SubmitAction = () => {

    const handelSubmitAction = (formData)=>{
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }

    return (
        <div>
            <form action={handelSubmitAction}>
                <input type="text" name="name" placeholder='Enter your name' />
                <br />
                <input type="email" name="email" placeholder='Enter your email' />
                <br /> 
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SubmitAction;