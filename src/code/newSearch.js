import getWeather from './weatherFetch';

const rdyToSearch = (() => {
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
})();

export { rdyToSearch };
