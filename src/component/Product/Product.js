import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {

    const {name,picture,price}=props.product;
    const {handleAddToCart}=props

    

    return (
        <div className='product'>
            <img src={picture} alt="" />
           <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
           </div>

           <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
               <p className='btn-text'>Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
           </button>
            
        </div>
    );
};

export default Product;