import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SwapiServiceProvider } from '../swapi-service-context/swapiServiceContext';
import Header from '../header';
import RandomPlanet from '../randomPlanet';

import SwapiService from '../../services/swapi-service';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../peoplePage';

import './app.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  render() {

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet/>
            <Route 
              path='/' 
              exact
              render={() => <h2 style={{ margin: '40px'}}>Welcome to StarDB View</h2>} 
            />
            <Route path='/people' component={PeoplePage} />
            <Route path='/planets' component={PlanetsPage} />
            <Route path='/starships' component={StarshipsPage} />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}