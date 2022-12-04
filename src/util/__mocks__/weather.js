const Weather = jest.fn(() => {
    return Promise.resolve({
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
    });
});

export default Weather ;