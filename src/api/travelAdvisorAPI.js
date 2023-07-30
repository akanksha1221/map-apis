/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      // headers: {
      //   'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
      //   'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      // },
      headers: {
        'X-RapidAPI-Key': '22d934ee82msh5451796a39f7193p1c1d43jsnfa2c6976a6d0',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(`https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lng}`, {
        params: { lat, lon: lng },
        headers: {
          'X-RapidAPI-Key': '22d934ee82msh5451796a39f7193p1c1d43jsnfa2c6976a6d0',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
