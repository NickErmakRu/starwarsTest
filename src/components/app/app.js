import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';

import './app.css';
import PeoplePage from '../peoplePage/peoplePage';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    
  };

  render() {

    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet/>

        <PeoplePage />

        <div className="row mb2 mainBlock">
          <div className="col-md-6 short">
            <ItemList 
              onItemSelected={this.onPersonSelected} 
              getData={this.swapiService.getAllPlanets}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2 mainBlock">
          <div className="col-md-6 short">
            <ItemList 
              onItemSelected={this.onPersonSelected} 
              getData={this.swapiService.getAllStarships}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

      </div>
    );
  }
}