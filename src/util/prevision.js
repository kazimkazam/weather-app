var clientId = process.env.REACT_APP_CLIENT_ID;

const Prevision = {
    async search(location) {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${clientId}&q=${location}&days=3&alerts=yes`);
        const jsonResponse = await response.json();

        const jsonArray = Object.entries(jsonResponse);

        let data = jsonArray[2][1].forecastday;
        const dates = [];

        if (data) {
            for (let k = 0; k < data.length; k++) {
                dates.push(data[k].date);
            };
        };

        let alertsArray = jsonArray[3][1].alert;
        const alerts = [];

        if (alertsArray) {
            for (let k = 0; k < alertsArray.length; k++) {
                if (alerts.filter(element => element !== alertsArray[k].desc)) {
                    alerts.push(alertsArray[k].desc);
                };
            }
        }

        return { dates, data, alerts };
    }
};

export { Prevision };
