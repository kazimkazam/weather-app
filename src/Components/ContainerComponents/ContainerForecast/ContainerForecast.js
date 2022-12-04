import React from 'react';
import { Forecast } from '../../PresentationalComponents/Forecast/Forecast';

class ContainerForecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dayToForecast: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.renderSelectDates = this.renderSelectDates.bind(this);
        this.renderDayForecast = this.renderDayForecast.bind(this);
        this.renderHourForecast = this.renderHourForecast.bind(this);
    };
    
    renderSelectDates() {
        if (this.props.forecast.dates) {
            return this.props.forecast.dates.map(date => {
                return <option value={ date } key={ date }>{ date }</option>;
            });
        }
    };
    
    renderDayForecast() {
        if (this.state.dayToForecast && this.props.forecast.data) {
            let forecast = this.props.forecast.data.filter(data => data.date === this.state.dayToForecast);

            return(
                <div className='forecast-day'>
                    <img src={ forecast[0].day.condition.icon } alt={ 'weather icon' } />
                    <p>{ forecast[0].day.condition.text }</p>

                    <table>
                        <thead>
                            <tr>
                                <th>Max / Min temperature</th>
                                <th>Avg temperature</th>
                                <th>UV</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ forecast[0].day.maxtemp_c } ºC / { forecast[0].day.mintemp_c } ºC</td>
                                <td>{ forecast[0].day.avgtemp_c } ºC</td>
                                <td>{ forecast[0].day.uv }</td>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                        <thead>
                            <tr>
                                <th>Humidity</th>
                                <th>Precipitation</th>
                                <th>Max wind</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ forecast[0].day.avghumidity } %</td>
                                <td>{ forecast[0].day.totalprecip_mm } mm</td>
                                <td>{ forecast[0].day.maxwind_kph } km/h</td>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                        <thead>
                            <tr>
                                <th>Sunrise / sunset</th>
                                <th>Moonrise / moonset</th>
                                <th>Moon phase / moon illumination</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ forecast[0].astro.sunrise } / { forecast[0].astro.sunset }</td>
                                <td>{ forecast[0].astro.moonrise } / { forecast[0].astro.moonset }</td>
                                <td>{ forecast[0].astro.moon_phase } / { forecast[0].astro.moon_illumination } %</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        };
    };

    renderHourForecast() {
        if (this.state.dayToForecast && this.props.forecast.data) {
            let forecast = this.props.forecast.data.filter(data => data.date === this.state.dayToForecast);
            
            return forecast[0].hour.map(hour => {
                return(
                    <div className='hour' key={ hour.time.split(' ')[1] } >
                        <div className='condition'>
                            <h3 className='darken'>{ hour.time.split(' ')[1] }</h3>
                            <img src={ hour.condition.icon } alt={ 'weather icon' } />
                        </div>
                        <div className='info'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Temperature</th>
                                        <th>Precipitation</th>
                                        <th>Cloud</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{ hour.temp_c } ºC</td>
                                        <td>{ hour.precip_mm } mm</td>
                                        <td>{ hour.cloud } %</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Humidity</th>
                                        <th>Wind</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{ hour.humidity } %</td>
                                        <td>{ hour.wind_kph } km/h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            });
        };
    };

    handleChange(date) {
        this.setState({ dayToForecast: date.target.value });
    };
    
    render() {
        return(
            <Forecast 
            handleChange={ this.handleChange }
            dates={ this.renderSelectDates() }
            forecast={ this.renderDayForecast() }
            hourForecast={ this.renderHourForecast() }
            />
        );
    };
};

export { ContainerForecast };