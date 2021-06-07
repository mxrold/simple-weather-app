import { createCardWeather } from './createCardWeather.js';
import { errorSearch } from './errorSearch.js';


const API_KEY = '8fbef6e1707527dcc52e36171225648f';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

export const fetchData = async (city) => {
    const response = await fetch(`${baseUrl}${city}&appid=${API_KEY}`);
    const responseJson = await response.json();
    
    try {
        createCardWeather(responseJson);
    } catch(error) {
        const message = `The city ${city} was not found. Try again.`
        errorSearch(message);
    }
}