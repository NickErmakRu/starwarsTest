import React from 'react';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import './peoplePage.css';

export default class PeoplePage extends React.Component {

  swapiService = new SwapiService();

  state = {
    selectedItem: 2,
  };

  onItemSelected = (selectedPerson) => {
    this.setState({selectedPerson})
  };
  
  render() {

    const {selectedItem} = this.state;

    return (
      <Row 
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}