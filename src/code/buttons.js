const buttonEvents = (desiredLocationData) => {
  const tempBtn = document.getElementById('temp-btn');
  const temperature = document.getElementById('temperature-text');
  const feels = document.getElementById('feel-txt');

  tempBtn.addEventListener('change', () => {
    if (tempBtn.checked) {
      temperature.textContent = `${desiredLocationData.temperatureF}°F`;
      feels.textContent = `${desiredLocationData.fellsLikeF}°F`;
    } else {
      temperature.textContent = `${desiredLocationData.temperatureC}°C`;
      feels.textContent = `${desiredLocationData.fellsLikeC}°C`;
    }
  });
};

const resetBtn = () => {
  const tempBtn = document.getElementById('temp-btn');
  tempBtn.checked = false;
};

export { buttonEvents, resetBtn };
