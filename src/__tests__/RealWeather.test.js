import React from "react";
import { render, screen } from '@testing-library/react';
import { RealWeather } from "../Components/RealTime/RealWeather";

var state = {
    realWeather: {
        status: '',
        icon: '',
        country: ''
    }
};

describe('test rendering of RealWeather component', () => {
    it('should start with empty state', () => {
        render(<RealWeather realWeather = { state.realWeather } />);

        const img = screen.queryByAltText('weather icon');
        const paragraph = screen.queryByRole('status');

        expect(img).toBeNull();
        expect(paragraph).toBeNull();
    });

    it('should display current weather status and all related info after user search', () => {
        state = {
            realWeather: {
                status: 'status',
                country: 'country',
                icon: '../resources/icons/day/113.png',
                name: 'name',
                quality: 1,
                lastUpdate: 'lastUpdate',
                lat: 'lat',
                lon: 'lon',
                tempC: 'tempC',
                feelsLike: 'feelsLike',
                humidity: 'humidity',
                uv: 'uv',
                cloud: 'cloud',
                precipitation: 'precipitation',
                windSpeed: 'windSpeed',
                windDir: 'windDir',
                pressure: 'pressure',
                co: 100.00,
                no2: 1.00,
                o3: 100.00,
                pm25: 10.00,
                pm10: 10.00,
                so2: 1.00
            }
        };
        
        render(<RealWeather realWeather = { state.realWeather } />);

        const paragraph = screen.getByText('status');
        expect(paragraph).toBeInTheDocument();

        const img = screen.getByAltText('weather icon');
        expect(img).toBeInTheDocument();

        const wind = screen.getByText('windSpeed km/h blowing windDir');
        expect(wind).toBeInTheDocument();
    });

    it('should have three divs', () => {
        state = {
            realWeather: {
                status: 'status',
                country: 'country',
                icon: '../resources/icons/day/113.png',
                name: 'name',
                quality: 1,
                lastUpdate: 'lastUpdate',
                lat: 'lat',
                lon: 'lon',
                tempC: 'tempC',
                feelsLike: 'feelsLike',
                humidity: 'humidity',
                uv: 'uv',
                cloud: 'cloud',
                precipitation: 'precipitation',
                windSpeed: 'windSpeed',
                windDir: 'windDir',
                pressure: 'pressure',
                co: 100.00,
                no2: 1.00,
                o3: 100.00,
                pm25: 10.00,
                pm10: 10.00,
                so2: 1.00
            }
        };
        
        render(<RealWeather realWeather = { state.realWeather } />);

        const figure = screen.getByRole('figure');
        expect(figure).toBeInTheDocument();

        const weatherInfo = screen.getByRole('weather-info');
        expect(weatherInfo).toBeInTheDocument();

        const realTime = screen.getByRole('real-time');
        expect(realTime).toBeInTheDocument();
    });
});
