import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './itemDetails.css';

export const Record = ({field, label, item}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}

export default class ItemDetails extends React.Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
  }

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item),
        });
      })
  }

  render() {

    const {item, image} = this.state;

    if (!item) {
      return <span>Select item from list</span>
    }

    const {id, name} = item;

    if (!id) {
      return <Spinner />; 
    }

    return (
      <div className="person-details card">
        <img 
          className="person-image"
          src={image}
          alt='itemImage' 
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item})
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}