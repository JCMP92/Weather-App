import { buttonEvents } from './buttons';

const processData = (weatherData) => {
  const locationTime = weatherData.location.localtime.split(' ');
  const locationData = {
    locationName: weatherData.location.name,
    country: weatherData.location.country,
    localTime: locationTime[1],
    conditionIcon: weatherData.current.condition.icon,
    conditionText: weatherData.current.condition.text,
    temperatureC: weatherData.current.temp_c,
    temperatureF: weatherData.current.temp_f,
    fellsLikeC: weatherData.current.feelslike_c,
    fellsLikeF: weatherData.current.feelslike_f,
    precipMM: weatherData.current.precip_mm,
    humidity: weatherData.current.humidity,
  };
  return locationData;
};

const displayData = (desiredLocationData) => {
  const locationName = document.getElementById('city-country-name');
  const localTime = document.getElementById('city-time');
  const imageCont = document.querySelector('#condition-icon');
  const conditionText = document.getElementById('condition-text');
  const temperature = document.getElementById('temperature-text');
  const feels = document.getElementById('feel-txt');
  const precip = document.getElementById('precip-txt');
  const humidity = document.getElementById('humty-txt');
  locationName.textContent = // eslint-disable-line operator-linebreak
    `${desiredLocationData.locationName} ` + // eslint-disable-line operator-linebreak
    `/` + // eslint-disable-line operator-linebreak
    ` ${desiredLocationData.country}`;
  localTime.textContent = desiredLocationData.localTime;
  imageCont.src = desiredLocationData.conditionIcon;
  conditionText.textContent = desiredLocationData.conditionText;
  temperature.textContent = `${desiredLocationData.temperatureC}°C`;
  feels.textContent = `${desiredLocationData.fellsLikeC}°C`;
  precip.textContent = `${desiredLocationData.precipMM}mm`;
  humidity.textContent = `${desiredLocationData.humidity}%`;
  buttonEvents(desiredLocationData);
};

export { processData, displayData };
