import React from 'react';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';

import './peoplePage.css';

export default class PeoplePage extends React.Component {

  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson})
  };
  
  render() {
    return (
      <div className="row mb2 mainBlock">
        <div className="col-md-6 short">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    )
  }
}