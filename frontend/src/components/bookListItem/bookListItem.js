 import React from 'react';
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
 import {faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons'
 import './bookListItem.css';

 const BookListItem = ({book, cartItems, onAddToCart, onDec}) => {
   const {id, title, author, price, coverImage} = book;
   const isInCart = cartItems.find((book) => book.id === id);
   return (
     <div className='book-list-item'>
       <div className='book-cover'>
        <img src={coverImage} alt='cover' />
       </div>
       <div className='book-details'>
         <span className='book-title'>{title}</span>
         <div className='book-author'>{author}</div>
         <div className='book-price'>{price} р.</div>
         {
           !isInCart ? (
            <button 
              className='btn btn-info add-to-cart'
              onClick={onAddToCart}
            >
              В корзину
            </button>
           ) : (
            <div 
              style={{display: 'flex', alignItems: 'center'}}
            >
              <button 
                className='btn btn-outline-danger btn-sm'
                style={{borderWidth: 0}}
                onClick={onDec}
              >
                <FontAwesomeIcon className='cart-icon' icon={faMinusCircle} />
              </button>
              <div style={{width: '2rem', textAlign: 'center'}}>{isInCart.count}</div>
              <button 
                className='btn btn-outline-success btn-sm'
                style={{borderWidth: 0}}
                onClick={onAddToCart}
              >
                <FontAwesomeIcon className='cart-icon' icon={faPlusCircle} />
              </button>
            </div>
           )
         }
       </div>
     </div>
   );
 };

 export default BookListItem;