const app = document.querySelector('#app');


const kelvinToCelsius = (kelvin) => {
    const initKelvin = 273.15;
    const result = (kelvin - initKelvin).toFixed(1);

    return result;
}

export const createCardWeather = (responseJson) => {
    const { name, sys, main, weather } = responseJson;

    const container = document.createElement('div');
    container.className = 'app__weather';
    container.id = responseJson.id

    const dataLeft = document.createElement('div');
    dataLeft.className = 'app__weather--dataLeft';

    const dataRight = document.createElement('div');
    dataRight.className = 'app__weather--dataRight';

    const pressure = document.createElement('p');
    pressure.className = 'app__weather--dataRight-pressure';
    pressure.textContent = `Pressure: ${main.pressure} hPa`;

    const humidity = document.createElement('p');
    humidity.className = 'app__weather--dataRight-humidity';
    humidity.textContent = `Humidity: ${main.humidity}%`;

    const nameCity = document.createElement('h4');
    nameCity.className = 'app__weather--dataLeft-title';
    nameCity.textContent = `${name}, `;

    const country = document.createElement('span');
    country.textContent =  `${sys.country}`;
    nameCity.appendChild(country);

    const temperature = document.createElement('span');
    temperature.classList = 'app__weather--dataLeft-temp';
    temperature.textContent = `${kelvinToCelsius(main.temp)} °C`; 

    const icon = document.createElement('img');
    icon.className = 'app__weather--dataLeft-icon';
    icon.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    
    const description = document.createElement('figcaption');
    description.className = 'app__weather--dataLeft-description';
    description.textContent = `${weather[0].description}`;
    
    const containerIcon = document.createElement('figure');
    containerIcon.append(icon, description);

    
    dataLeft.append(nameCity, temperature, containerIcon);
    dataRight.append(pressure, humidity);
    container.append(dataLeft, dataRight);
    app.appendChild(container);
}