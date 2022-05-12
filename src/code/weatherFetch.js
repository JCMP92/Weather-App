import { processData, displayData } from './process-display';
import { resetBtn } from './buttons';
import resetInput from './resetSearch';

export default async function getWeather(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=217f668dd0994a86a21160307220305&q=${location}`,
      {
        mode: 'cors',
      }
    );
    const weatherData = await response.json();
    const desiredLocationData = processData(weatherData);
    resetBtn();
    displayData(desiredLocationData);
    resetInput();
  } catch (err) {
    alert('Sorry, that´s not a valid location');
  }
}
