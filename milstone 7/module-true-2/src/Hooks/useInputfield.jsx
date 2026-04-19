import React, { useState } from 'react';



const useInputfield = (defaultValue) => {
  const [fieldValue, setFieldValue] = useState(defaultValue)
   

  const handelFieldOnchange = (e)=>{
    setFieldValue(e.target.value)
  }

  return [fieldValue, handelFieldOnchange]
};

export default useInputfield;