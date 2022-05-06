async function getWeather(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=217f668dd0994a86a21160307220305&q=${location}`,
      {
        mode: 'cors',
      }
    );
    const weatherData = await response.json();

    console.log(weatherData);
    console.log(processData(weatherData));
    const desiredLocationData = processData(weatherData);
    resetBtn();
    displayData(desiredLocationData);
    resetInput();
  } catch (err) {
    alert('Sorry, that´s not a valid location');
  }
}

getWeather('PUEBLA');

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
  locationName.textContent =
    desiredLocationData.locationName +
    ' ' +
    '/' +
    ' ' +
    desiredLocationData.country;
  localTime.textContent = desiredLocationData.localTime;
  imageCont.src = desiredLocationData.conditionIcon;
  conditionText.textContent = desiredLocationData.conditionText;
  temperature.textContent = desiredLocationData.temperatureC + '°C';
  feels.textContent = desiredLocationData.fellsLikeC + '°C';
  precip.textContent = desiredLocationData.precipMM + 'mm';
  humidity.textContent = desiredLocationData.humidity + '%';
  buttonEvents(desiredLocationData);
};

const buttonEvents = (desiredLocationData) => {
  const tempBtn = document.getElementById('temp-btn');
  const temperature = document.getElementById('temperature-text');
  const feels = document.getElementById('feel-txt');

  tempBtn.addEventListener('change', function (e) {
    if (tempBtn.checked) {
      temperature.textContent = desiredLocationData.temperatureF + '°F';
      feels.textContent = desiredLocationData.fellsLikeF + '°F';
    } else {
      temperature.textContent = desiredLocationData.temperatureC + '°C';
      feels.textContent = desiredLocationData.fellsLikeC + '°C';
    }
  });
};

const searchInput = document.querySelector('input');
const searchBtn = document.getElementById('search-btn');
searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather(searchInput.value);
  }
});
searchBtn.addEventListener('click', function (e) {
  getWeather(searchInput.value);
});

const resetInput = () => {
  const searchInput = document.getElementById('location');
  searchInput.value = '';
};

const resetBtn = () => {
  const tempBtn = document.getElementById('temp-btn');
  tempBtn.checked = false;
};
