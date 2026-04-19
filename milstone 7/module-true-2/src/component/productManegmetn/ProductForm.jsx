import React, { useState } from 'react';

const ProductForm = ({handelAddProduct}) => {
 const [error, setError] = useState('')

 const handelProductForm = (e)=>{
 e.preventDefault()
  const name = e.target.name.value
  const price = e.target.price.value
  const quantity = e.target.quantity.value

  
  if(name.length===0){
    setError('plesse add product name')
    return
  }else if(price.length===0){
    setError('plesse add product price')
    return
  }else if(price<0){
    setError('price can be not negative')
    return
  }else if(quantity.length=== 0){
    setError('plesse add quantity')
    return
  }else{
    setError('')
  }

 const newProduct ={
    name,
    price,
    quantity
 }
//  console.log(newProduct)
handelAddProduct(newProduct)

 }


    return (
        <div>
            <form onSubmit={handelProductForm}>
                <input type="text" name='name' placeholder='product name' />
                <br />
                <input type="text" name='price' placeholder='product price' />
                <br />
                <input type="text" name='quantity' placeholder='product quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color:'red'}}>{error}</p>
        </div>
    );
};

export default ProductForm;