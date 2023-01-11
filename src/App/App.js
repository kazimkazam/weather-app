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
import LoadingSpinner from '../Components/PresentationalComponents/LoadingSpinner/LoadingSpinner';

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

  componentDidUpdate() {
    if (this.state.realWeather && this.state.forecast && this.state.history && this.state.sports) {
      // show containers with weather info
      document.getElementById('container').style.visibility = 'visible';

      // change searchBar location and show alerts, searchBar and alerts will have display flex and space-evenly
      document.getElementById('searchBar').style.position = 'relative'
      document.getElementById('searchAndAlerts').style.justifyContent = 'space-evenly';
      document.getElementById('alerts').style.visibility = 'visible';

      // hide loading spinner and loading message
      document.getElementById('loading-spinner').style.visibility = 'hidden';
    } else {
      // hide containers with weather info
      document.getElementById('container').style.visibility = 'hidden';

      // change searchbar location to the center of the screen and hide alerts
      document.getElementById('searchBar').style.position = 'absolute'
      document.getElementById('searchAndAlerts').style.justifyContent = 'center';
      document.getElementById('alerts').style.visibility = 'hidden';

      // show loading spinner and loading message
      document.getElementById('loading-spinner').style.visibility = 'visible';
    };
  };

  search(location) {
    // show loading spinner while fetching
    document.getElementById('loading-spinner').style.visibility = 'visible';
    document.getElementById('container').style.visibility = 'hidden';
    document.getElementById('alerts').style.visibility = 'hidden';

    setTimeout(() => {
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
    }, 10000)

    // Weather.search(location)
    // .then(
    //   realWeather => {
    //     this.setState({ realWeather: realWeather })
    //   }
    // );

    // Prevision.search(location)
    // .then(
    //   forecast => {
    //     this.setState({ forecast: forecast })
    //   }
    // );

    // SportsAPI.search(location)
    // .then(
    //   sports => {
    //     this.setState({ sports: sports })
    //   }
    // );
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

      <div id='searchAndAlerts'>
        <ContainerSearchBar onSearch={ this.search } />
        
        <div id='alerts' >
          <ContainerAlerts alerts={ this.state.forecast } />
        </div>
      </div>

        <div className='container' id='container' >
          <LoadingSpinner type={ 'bubbles' } color={ '#1beabd' } height={ '8rem' } width={ '8rem' } />
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
