var clientId = process.env.REACT_APP_CLIENT_ID;

const Weather = {
    async search(location) {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${clientId}&q=${location}&aqi=yes`);
        const jsonResponse = await response.json();

        let jsonArray = Object.values(jsonResponse);

        if (jsonArray[0]) {
            return({
                country: jsonArray[0].country,
                lat: jsonArray[0].lat,
                lon: jsonArray[0].lon,
                name: jsonArray[0].name,
                tempC: jsonArray[1].temp_c,
                feelsLike: jsonArray[1].feelslike_c,
                uv: jsonArray[1].uv,
                cloud: jsonArray[1].cloud,
                windSpeed: jsonArray[1].wind_kph,
                windDir: jsonArray[1].wind_dir,
                humidity: jsonArray[1].humidity,
                pressure: jsonArray[1].pressure_mb,
                precipitation: jsonArray[1].precip_mm,
                lastUpdate: jsonArray[1].last_updated,
                
                // weather conditions
                icon: jsonArray[1].condition.icon,
                status: jsonArray[1].condition.text,

                // air quality
                co: jsonArray[1].air_quality.co,
                no2: jsonArray[1].air_quality.no2,
                o3: jsonArray[1].air_quality.o3,
                pm25: jsonArray[1].air_quality.pm2_5,
                pm10: jsonArray[1].air_quality.pm10,
                so2: jsonArray[1].air_quality.so2,
                quality: jsonArray[1].air_quality["us-epa-index"]
            });
        } else {
            return {};
        }
    }
};

export { Weather };
