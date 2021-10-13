import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {SwapiServiceProvider} from '../swapi-service-context/swapiServiceContext';
import SwapiService from '../../services/swapi-service';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import {LoginPage, PeoplePage, PlanetsPage, SecretPage, StarshipsPage} from '../peoplePage';
import {StarshipDetails} from '../sw-components';

import './app.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <Router>
          <div className="stardb-app">
            <Header />
            <RandomPlanet/>

            <Switch>
              <Route 
                path='/' 
                exact
                render={() => <h2 style={{ margin: '40px'}}>Welcome to StarDB View</h2>} 
              />
              <Route path='/people/:id?' component={PeoplePage} />
              <Route path='/planets' component={PlanetsPage} />
              <Route 
                path='/starships'   
                exact
                component={StarshipsPage} 
              />
              <Route 
                path='/starships/:id'
                render={({match}) => {
                  const {id} = match.params;
                  return (
                    <div style={{margin: '50px'}}>
                      <StarshipDetails itemId={id} />
                    </div>
                  )
                }}
              />
              <Route 
                path='/login' 
                render={() => 
                  <LoginPage isLoggedIn={this.state.isLoggedIn} onLogin={this.onLogin} />
                }
              />
              <Route 
                path='/secret' 
                render={() => 
                  <SecretPage isLoggedIn={this.state.isLoggedIn} />
                }
              />
              <Route render={() => 
                <h3 className='jumbotron text-center'>404 Page not found! 0_0</h3>
              } />
            </Switch>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}