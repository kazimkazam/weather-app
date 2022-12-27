# Weather

The application is deployed and can be accessed through the link below:

## https://kazimkazam-weather-app.netlify.app

This application uses React components to deliver a single-page application (SPA) where users can check the weather.

## Table of Contents

- [Development](#development);
- [How to Use](#how-to-use);
- [Screenshots](#screenshots);
- [Tests](#tests);
- [Author](#author);
- [References](#references);
- [Licence](#licence).

## Development

The SPA was coded using React.

The application is running on:

- react 18.2.0
- react-dom 18.2.0

## How to Use

The SPA starts by loading an header and a search bar. The user should use the search bar and type in any location of their choice. Afterwards, by pressing 'Enter', the weather, alerts and football events at such location will be looked up, and the results will then be shown on the page.

On the right side of the page, it will be shown forecast news. Here, the user can choose to see displayed a day overview of the present day, or from one of the next two days.
The bottom part of this forecast section, shows the forecast for each hour of the respective day. The user can scroll on the container to access the remaining hidden information.

At the moment, the SPA is only prepared to work with screens with width greater than 1250px.

## Screenshots

### Starting page

![image](https://github.com/kazimkazam/weather-app/blob/master/screenshots/startingPage.png?raw=true)

### Search bar

![image](https://github.com/kazimkazam/weather-app/blob/master/screenshots/searchBar.png?raw=true)

### Loading info

![image](https://github.com/kazimkazam/weather-app/blob/master/screenshots/loadingInfo.png?raw=true)

### Information display

![image](https://github.com/kazimkazam/weather-app/blob/master/screenshots/infoDisplayed.png?raw=true)

## Forecast date selection

![image](https://github.com/kazimkazam/weather-app/blob/master/screenshots/forecastDateOptions.png?raw=true)

### Forecast scroll

![image](https://github.com/kazimkazam/weather-app/blob/master/screenshots/forecastScroll.png?raw=true)

### Alerts

![image](https://github.com/kazimkazam/weather-app/blob/master/screenshots/alerts.png?raw=true)

## Tests

Tests were conducted using React Testing Library. To intersect requests made to the Weather API, it was used the Mock Service Worker (MSW) and mocked responses were returned.

Tests were run on:

- "@testing-library/jest-dom": "^5.16.4"
- "@testing-library/react": "^13.4.0"
- "@testing-library/user-event": "^13.5.0"
- "jest": "^28.1.3"
- "msw": "^0.49.1"

![image](https://github.com/kazimkazam/weather-app/blob/master/screenshots/tests/tests.png?raw=true)

## Author

@kazimkazam (monsieurkazimkazam@gmail.com).

## References

All data presented is collected from Weather API (https://www.weatherapi.com).

## Licence

MIT