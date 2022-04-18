import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {


    // data load in the shop
    const [products,setProducts]=useState([])

    // cart use state
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(product)=>{
        console.log(product);

        const newCart=[...cart,product];
        setCart(newCart);

    }

    return (
        <div className='shop-container'>
            <div className="products-container">

                {

                    products.map(product=><Product

                         key={product.id}
                         product={product}
                         handleAddToCart={handleAddToCart}
                         
                         ></Product>)
                }
                
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
                <p>Seclected Item:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;