import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './shopHeader.css';

const ShopHeader = ({numItems, total}) => {
  return (
    <div className='shop-header row'>
      <Link to='/' className='logo text-dark'>BookStore</Link>
      <div className='activeBorder'>
        <Link to='/cart' className='shopping-cart'>
          {/* <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} /> */}
          {numItems} шт. ({total} р.)
        </Link>
      </div>
      <div className='activeBorder1'>
        <Link to='/cart' className='shopping-cart'>
          {/* <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} /> */}
          {numItems} шт. ({total} р.)
        </Link>
      </div>
    </div>
  )
}

export default ShopHeader;