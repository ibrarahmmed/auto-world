import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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

    const handleClearCart=()=>{
        setCart([]);
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
               <Cart cart={cart} products={products} handleClearCart={handleClearCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;