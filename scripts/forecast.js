const key = 'UHAYccqlLupZaB07NC43KvoA0BCVmfkY';

const getCity = async(city) =>{

  const source = 'http://dataservice.accuweather.com/locations/v1/cities/search'; 
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(source+query);
  const data = await response.json();

  return data[0];
};

const getWeather = async(id) =>{

  const source = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(source+query);
  const data = await response.json();

  return data[0];

};

