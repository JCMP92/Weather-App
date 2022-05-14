import getWeather from './weatherFetch';

const rdyToSearch = (() => {
  const searchInput = document.querySelector('input');
  const searchBtn = document.getElementById('search-btn');
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      getWeather(searchInput.value);
    }
  });
  searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
  });
})();

export default rdyToSearch;
