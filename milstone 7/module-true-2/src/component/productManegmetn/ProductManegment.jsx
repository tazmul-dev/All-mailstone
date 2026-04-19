import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManegment = () => {

    const [products, setProducts] = useState([]);

    const handelAddProduct = newProduct =>{
        
        const newProducts = [...products, newProduct];
        setProducts(newProducts);

    }

    return (
        <div>
            <h3>Add to product</h3>
            
            <ProductForm handelAddProduct={handelAddProduct}></ProductForm>
            <ProductTable products ={products}></ProductTable>
        </div>
    );
};

export default ProductManegment;