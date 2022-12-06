import { rest } from 'msw';
import { realWeatherData, forecastAndAlertsData, sportsData } from './mockData';

export const handlers = [
    // Handles a GET real weather request
    rest.get('https://api.weatherapi.com/v1/current.json', async (req, res, ctx) => {
        const response = res(
            ctx.status(200),
            ctx.delay(),
            ctx.json(realWeatherData)
        );    

        return response;
    }),

    // Handles a GET forecast request
    rest.get('https://api.weatherapi.com/v1/forecast.json', async (req, res, ctx) => {
        const response = res(
            ctx.status(200),
            ctx.delay(),
            ctx.json(forecastAndAlertsData)
        );    

        return response;
    }),

    // Handles a GET sports request
    rest.get('https://api.weatherapi.com/v1/sports.json', async (req, res, ctx) => {
        const response = res(
            ctx.status(200),
            ctx.delay(),
            ctx.json({ sportsData })
        );    

        return response;
    }),
];