import React from 'react';
import { RealWeather } from '../../PresentationalComponents/RealWeather/RealWeather';

class ContainerRealWeather extends React.Component {
    renderFigure() {
        if (this.props.realWeather.country) {
            return(
                <div className='figure' role={ 'figure' } >
                    <h2>Now</h2>
                    <img src={ this.props.realWeather.icon } alt={ 'weather icon' } />
                    <p>{ this.props.realWeather.status }</p>
                    <br />
                    <p>Last updated on { this.props.realWeather.lastUpdate }</p>
                </div>
            );
        };
    };

    renderWeather() {
        if (this.props.realWeather.country) {
            let quality;
            switch(this.props.realWeather.quality) {
                case 1:
                    quality = '--> Good';
                    break;
                case 2:
                    quality = '--> Moderate';
                    break;
                case 3:
                    quality = '--> Unhealthy for sensitive groups';
                    break;
                case 4:
                    quality = '--> Unhealthy';
                    break;
                case 5:
                    quality = '--> Very unhealthy';
                    break;
                case 6:
                    quality = '--> Hazardous';
                    break;
                default:
                    quality = '';
                    break;
            };

            return(
                <div className='weather-info' >
                    <table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>City</th>
                                <th>Coordinates: latitude / longitude</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ this.props.realWeather.country }</td>
                                <td>{ this.props.realWeather.name }</td>
                                <td>{ this.props.realWeather.lat } / { this.props.realWeather.lon }</td>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                        <thead>
                            <tr>
                                <th>Temperature</th>
                                <th>Temperature feels like / Humidity</th>
                                <th>UV</th>
                                <th>Cloud</th>
                                <th>Precipitation</th>
                                <th>Wind speed / direction</th>
                                <th>Pressure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ this.props.realWeather.tempC } ºC</td>
                                <td>{ this.props.realWeather.feelsLike } ºC  / { this.props.realWeather.humidity }%</td>
                                <td>{ this.props.realWeather.uv }</td>
                                <td>{ this.props.realWeather.cloud } %</td>
                                <td>{ this.props.realWeather.precipitation } mm</td>
                                <td>{ this.props.realWeather.windSpeed } km/h blowing { this.props.realWeather.windDir }</td>
                                <td>{ this.props.realWeather.pressure } mB</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h2>Air quality { quality }</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>CO</th>
                                <th>NO<sub>2</sub></th>
                                <th>O<sub>3</sub></th>
                                <th>PM<sub>2.5</sub></th>
                                <th>PM<sub>10</sub></th>
                                <th>SO<sub>2</sub></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ this.props.realWeather.co.toPrecision(5) } µg/m³</td>
                                <td>{ this.props.realWeather.no2.toPrecision(3) } µg/m³</td>
                                <td>{ this.props.realWeather.o3.toPrecision(5) } µg/m³</td>
                                <td>{ this.props.realWeather.pm25.toPrecision(4) } µg/m³</td>
                                <td>{ this.props.realWeather.pm10.toPrecision(4) } µg/m³</td>
                                <td>{ this.props.realWeather.so2.toPrecision(3) } µg/m³</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        };
    };

    render() {
        return(
            <RealWeather 
            figure={ this.renderFigure() }
            weather={ this.renderWeather() }
            />
        );
    };
};

export { ContainerRealWeather };