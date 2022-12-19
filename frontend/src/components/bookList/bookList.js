import React from 'react';
import BookListItem from '../bookListItem';
import Spinner from '../spinner';
import ErrorIndicator from '../errorIndicator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {compose} from '../../utils';
import {withBookstoreService} from '../hoc';
import {fetchBooks, bookAddedToCart, bookRemovedFromCart} from '../../redux-config/actions';
import './bookList.css';

const BookList = ({books, cartItems, onAddToCart, onDec}) => {
  return (
    <ul className='book-list'>
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem 
                book={book} 
                cartItems={cartItems}
                onAddToCart={() => onAddToCart(book.id)}
                onDec={() => onDec(book.id)}
              />
            </li>
          )
        })
      }
    </ul>
  );
}

const BookListContainer = ({
  books, 
  isLoading, 
  error,
  fetchBooks,
  onAddToCart,
  cartItems,
  onDec,
}) => {

  const getBookList = React.useCallback(() => {
    fetchBooks();
  }, [fetchBooks]);

  React.useEffect(() => {
    getBookList();
  }, [getBookList]);

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return <BookList books={books} onAddToCart={onAddToCart} onDec={onDec} cartItems={cartItems}/>
};

const mapStateToProps = ({bookList: {books, isLoading, error}, shoppingCart: {cartItems}}) => {
  return {books, isLoading, error, cartItems}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddToCart: bookAddedToCart,
    onDec: bookRemovedFromCart,
  }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
