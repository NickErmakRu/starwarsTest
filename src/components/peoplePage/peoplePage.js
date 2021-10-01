import React from 'react';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import './peoplePage.css';

export default class PeoplePage extends React.Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson})
  };
  
  render() {

    const itemList = (
      <ItemList 
        onItemSelected={this.onPersonSelected} 
        getData={this.swapiService.getAllPeople}
      >
        {
          (i) => (
            `${i.name} (${i.gender}, ${i.birthYear})`
          )
        }
      </ItemList>
    );

    const personDetails = (
      <ItemDetails itemId={this.state.selectedPerson} />
    );

    return (
      <Row left={itemList} right={personDetails} />
    )
  }
}