import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';

import './app.css';
import PeoplePage from '../peoplePage/peoplePage';

export default class App extends Component {

  state = {
    
  };

  render() {

    return (
      <div className="stardb-app">
        <Header />
        <RandomPlanet/>

        <PeoplePage />
      </div>
    );
  }
}