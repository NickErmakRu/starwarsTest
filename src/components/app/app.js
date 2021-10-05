import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';

import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails from '../itemDetails';
import PeoplePage from '../peoplePage';
import { Record } from '../itemDetails/itemDetails';

import { SwapiServiceProvider } from '../swapi-service-context/swapiServiceContext';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  render() {

    const {
      getPerson, 
      getStarship, 
      getPersonImage, 
      getStarshipImage
    } = this.state.swapiService;

    const personDetails = (
      <ItemDetails 
        itemId={11} 
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field='gender' label='Gender' />
        <Record field='birthYear' label='Birth year' />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails 
        itemId={5} 
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field='model' label='Model' />
        <Record field='length' label='Length' />
        <Record field='crew' label='Crew' />
      </ItemDetails>
    );

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <div className="stardb-app">
          <Header />
          <RandomPlanet/>

          <PeoplePage />

        </div>
      </SwapiServiceProvider>
    );
  }
}