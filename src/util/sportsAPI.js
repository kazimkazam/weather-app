var clientId = process.env.REACT_APP_CLIENT_ID;

const SportsAPI = {
    async search(location) {
        const response = await fetch(`http://api.weatherapi.com/v1/sports.json?key=${clientId}&q=${location}`);
        const jsonResponse = await response.json();

        const jsonArray = Object.entries(jsonResponse);

        let data = jsonArray[0][1];

        return data;
    }
};

export { SportsAPI };