const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateUI = (data) => {

  const {cityDets, weather} = data;

  details.innerHTML = `
    <h5>${cityDets.EnglishName}</h5>
    <div class="weather-condition">${weather.WeatherText}</div>
    <div class="temperature">
      <span class="degrees">${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
  </div>
  `;

  //Icons Update
  const iconSrc = `icons/${weather.WeatherIcon}.svg`
  icon.setAttribute('src', iconSrc);

  //Image Update
  let timeSrc = null;

  if(weather.IsDayTime){

    timeSrc = 'img/day.png';

  }else{

    timeSrc = 'img/night.png';

  }
  time.setAttribute('src', timeSrc);

  if(card.classList.contains('none')){
    card.classList.remove('none');
  } 

};

const updateCity = async(city) => {

  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets: cityDets, 
    weather: weather
  };
};

cityForm.addEventListener('submit', e =>{
  e.preventDefault();
  //get city
  const city = cityForm.city.value.trim();
  cityForm.reset();
  //update the ui with a new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
  
});