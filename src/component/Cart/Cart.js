import React, {  useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, products,handleClearCart } = props
   
    const [freeProduct, setFreeProduct] = useState({});
    console.log(products)




    const handleOffer = () => {
        const randomNumber = Math.floor(Math.random() * cart.length);
        const item = cart[randomNumber];
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



            <button onClick={handleOffer} className= 'offer-btn'><p>CHOOSE 1 FOR ME</p></button>


            {Object.keys(freeProduct).length > 0 && (
                <div className="cart-item">
                    <div className='cart-img'>
                        <img src={freeProduct.picture} alt="" />
                    </div>
                    <div>
                        <p>{freeProduct.name}</p>
                    </div>
                </div>
            )}

            <button onClick={handleClearCart} className='delete-btn'><p>CHOOSE AGAIN </p></button>









        </div>
    );
};

export default Cart;