import React from 'react';
import {connect} from 'react-redux';
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from '../../redux-config/actions';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faPlusCircle, faMinusCircle} from '@fortawesome/free-solid-svg-icons'

import './shopCartTable.css';

const ShopCartTable = ({items, total, onInc, onDec, onDel}) => {
  
  const renderRow = (item, idx) => {
    const {id, title, count, total} = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total} р.</td>
        <td>
          <button 
            onClick={() => onDel(id)}
            className='btn btn-outline-danger btn-sm action'
          >
            <FontAwesomeIcon className='cart-icon' icon={faTrash} />
          </button>
          <button 
            onClick={() => onInc(id)}
            className='btn btn-outline-success btn-sm action'
          >
            <FontAwesomeIcon className='cart-icon' icon={faPlusCircle} />
          </button>
          <button 
            onClick={() => onDec(id)}
            className='btn btn-outline-warning btn-sm action'
          >
            <FontAwesomeIcon className='cart-icon' icon={faMinusCircle} /> 
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className='shopping-cart-table'>
      <h2>Заказ</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Наименование</th>
            <th>Количество</th>
            <th>Стоимость</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>

      <div className='total'>
        Итог: {total} р.
      </div>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispatchToProps = {
  onInc: bookAddedToCart,
  onDec: bookRemovedFromCart,
  onDel: allBooksRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartTable);