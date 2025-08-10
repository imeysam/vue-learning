import { ref } from 'vue';
import axios from 'axios';

export function useWeather(defaultCity = "تهران") {
  const city = ref(defaultCity);
  const weatherData = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  async function getWeatherData() {
    loading.value = true;
    error.value = null;
    weatherData.value = null;
    
    if (!city.value) {
        error.value = "نام یک شهر را وارد کنید.";
        loading.value = false;
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric&lang=fa`;

    try {
      const response = await axios.get(url);
      weatherData.value = {
        temp: response.data.main.temp,
        description: response.data.weather[0].description,
        cityName: response.data.name,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      };
    } catch (err) {
      if (err.response && err.response.status === 404) {
        error.value = `شهر "${city.value}" پیدا نشد.`;
      } else {
        error.value = "خطایی در ارتباط با سرور رخ داد.";
      }
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  return {
    city,
    weatherData,
    loading,
    error,
    getWeatherData
  };
}