import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';

import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails from '../itemDetails';
import { Record } from '../itemDetails/itemDetails';
import ItemList from '../itemList/itemList';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    
  };

  render() {

    const {
      getPerson, 
      getStarship, 
      getPersonImage, 
      getStarshipImage,
      getAllPeople,
      getAllStarships
    } = this.swapiService;

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
      <div className="stardb-app">
        <Header />
        <RandomPlanet/>

        {/* <Row 
          left={<PersonList>{({name}) => <span>{name}</span>}</PersonList>} 
          right={<PersonDetails itemId={11} />} 
        /> */}

        <PersonDetails itemId={11} />
        <PlanetDetails itemId={5} />
        <StarshipDetails itemId={9} />

        <PersonList />
        <StarshipList />

      </div>
    );
  }
}