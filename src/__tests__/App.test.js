import React from "react";
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from '../App/App';

describe('test App component', () => {
    beforeEach(() => {
        render(<App />);
    });

    afterEach(() => {
        cleanup();
    });
    
    it('should start with initial state', async () => {
        const searchField = screen.queryByTestId('searchInput');
        expect(searchField).toBeInTheDocument();

        const realWeatherData = screen.queryByTestId('realWeatherFigure');
        expect(realWeatherData).not.toBeInTheDocument();

        const forecastData = screen.queryByTestId('forecastDayIcon');
        expect(forecastData).not.toBeInTheDocument();
        
        const alerts = screen.queryByTestId('alertsData');
        expect(alerts).not.toBeInTheDocument();
        
        const sportsData = screen.queryByTestId('sportsData');
        expect(sportsData).not.toBeInTheDocument();
    });

    it('should load weather data after keydown', async () => {
        // fire event user typing the location
        const searchField = screen.queryByTestId('searchInput');
        fireEvent.change(searchField, { target: { value: 'test' } });

        // fire event user hitting the enter key
        fireEvent.click(searchField);
        fireEvent.keyDown(searchField, { key: 'Enter', code: 'Enter', keyCode: 13, charCode: 13 });

        // fire event selecting day to forecast
        await waitFor(() => userEvent.selectOptions(screen.getByTestId('forecastSelectDate'), [ '2022-12-07' ]));

        // verify info was fetched and is now appearing
        // realtime
        await waitFor(() => expect(screen.getByText('Temperature feels like / Humidity')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText('Wind speed / direction')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText('CO')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText('Air quality --> Good')).toBeInTheDocument());

        // forecast
        await waitFor(() => expect(screen.getByText('Max / Min temperature')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText('Moon phase / moon illumination')).toBeInTheDocument());

        // hour
        await waitFor(() => expect(screen.getByText('04:00')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText('09:00')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText('18:00')).toBeInTheDocument());

        // alerts
        await waitFor(() => expect(screen.getByText('Periods of rain, sometimes heavy and accompanied by thunderstorms.')).toBeInTheDocument());

        // sports
        await waitFor(() => expect(screen.getByText('FIFA World Cup Round of 16 / 2022-12-06 15:00')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText('Boreham Wood vs Oldham Athletic')).toBeInTheDocument());
        await waitFor(() => expect(screen.getByText('Galatasaray vs Villarreal')).toBeInTheDocument());
    });
});