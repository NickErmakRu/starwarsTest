import React, { Component } from 'react';

import swapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './randomPlanet.css';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 2000
  }

  static propTypes = {
    updateInterval: (props, propName, componentName) => {
      const value = props[propName];

      if (typeof value !== 'number' && !isNaN(value)) {
        return null
      }

      return new TypeError(`${componentName}: ${propName} must be number`);
    }
  }

  swapiService = new swapiService();

  state = {
    planet: {},
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    const {updateInterval} = this.props;
    this.updatePlanet();
    this.interval = setInterval(() => this.updatePlanet(), updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, isLoading: false});
  };

  onError = (err) => {
    this.setState({isError: true, isLoading: false});
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random()*13) + 3;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {

    const {planet, isLoading, isError} = this.state;

    const hasData = !(isLoading || isError);

    const errorMessage = isError ? <div>Ошибка при загрузке</div> : null;
    const spinner = isLoading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
        {errorMessage}
      </div>
    );
  }
}

const PlanetView = ({planet}) => {
  const {id, name, climate, population, rotationPeriod, diameter} = planet;
  return (
    <>
      <img 
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Climate</span>
            <span>{climate}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}