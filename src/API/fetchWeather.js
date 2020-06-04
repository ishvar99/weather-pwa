import Axios from 'axios';
const URL = 'http://api.openweathermap.org/data/2.5/weather';
const APP_ID = '0164fd3ac956c6805967ca5242d6045a';
const fetchWeather = async (query) => {
  const { data } = await Axios.get(URL, {
    params: {
      q: query,
      APPID: APP_ID,
      units: 'metric',
    },
  });
  return data;
};
export default fetchWeather;
