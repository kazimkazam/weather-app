import './App.css';
import React from 'react';

import { ContainerSearchBar } from '../Components/ContainerComponents/ContainerSearchBar/ContainerSearchBar';
import { ContainerRealWeather } from '../Components/ContainerComponents/ContainerRealWeather/ContainerRealWeather';
import { ContainerForecast } from '../Components/ContainerComponents/ContainerForecast/ContainerForecast';
import { ContainerSports } from '../Components/ContainerComponents/ContainerSports/ContainerSports';
import { ContainerAlerts } from '../Components/ContainerComponents/ContainerAlerts/ContainerAlerts';
import { Footer } from '../Components/PresentationalComponents/Footer/Footer';

import { Weather } from '../util/weather';
import { Prevision } from '../util/prevision';
import { SportsAPI } from '../util/sportsAPI';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      realWeather: [],
      forecast: [],
      history: [],
      sports: []
    };

    this.search = this.search.bind(this);
  };

  search(location) {
    Weather.search(location)
    .then(
      realWeather => {
        this.setState({ realWeather: realWeather })
      }
    );

    Prevision.search(location)
    .then(
      forecast => {
        this.setState({ forecast: forecast })
      }
    );

    SportsAPI.search(location)
    .then(
      sports => {
        this.setState({ sports: sports })
      }
    );

    document.getElementById('container').style.visibility = 'visible';
    document.getElementById('alerts').style.visibility = 'visible';
  };

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <div className='spinner'>
            <img id='logo' src={ require('../resources/icons/day/113.png') } alt='logo' />
          </div>
          <h1>The Weather all day, everyday</h1>
          <div className='spinner'>
            <img id='logo' src={ require('../resources/icons/day/113.png') } alt='logo' />
          </div>
        </header>

        <ContainerSearchBar onSearch={ this.search } />
        
        <div id='alerts' >
          <ContainerAlerts alerts={ this.state.forecast } />
        </div>

        <div className='container' id='container' >
          <ContainerRealWeather realWeather={ this.state.realWeather } />
          <ContainerForecast forecast={ this.state.forecast } />
          <ContainerSports sports={ this.state.sports } />
        </div>

        <Footer />
        
      </div>
    );
  };
};

export { App };
