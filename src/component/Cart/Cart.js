import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart,products } = props
    const {freeProduct,setFreeProduct}=useState({})
    console.log(products)



    const handleOffer=()=>{
        const randomNumber=Math.floor(Math.random()*products.length);
        const item=products[randomNumber];
        setFreeProduct(item);
    }


    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item:{cart.length}</p>
            {
                cart.map((product, id) => (
                    <div key={id} className="cart-item">
                        <div className='cart-img'>
                            <img src={product.picture} alt="" />
                        </div>
                        <div>
                            <p>{product.name}</p>
                        </div>
                    </div>




                ))
            }

            

            <button onClick={handleOffer} className='offer-btn'><p>Choose 1 For Me</p></button>

            {Object.keys( freeProduct).length > 0 &&
               ( <div  className="cart-item">
                <div className='cart-img'>
                    <img src={freeProduct.picture} alt="" />
                </div>
                <div>
                    <p>{freeProduct.name}</p>
                </div>
            </div>
               )}

        </div>
    );
};

export default Cart;