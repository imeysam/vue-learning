<script setup>
import TitleComponent from "@/components/TitleComponent.vue";
import { useWeather } from "@/composables/useWeather";
import { onMounted } from "vue";

const { city, weatherData, loading, error, getWeatherData } =
  useWeather("تهران");

function clearResult() {
  weatherData.value = null;
  error.value = null;
}

onMounted(getWeatherData);
</script>

<template>
  <TitleComponent title="هاوا چیطور ؟" />

  <form @submit.prevent="getWeatherData">
    <input
      type="text"
      v-model="city"
      @input="clearResult"
      placeholder="نام شهر را وارد کنید..."
    />
    <button type="submit" :disabled="loading">
      {{ loading ? "..." : "جستجو" }}
    </button>
  </form>

  <div v-if="loading" class="info">در حال بارگذاری...</div>
  <div v-if="error" class="error">{{ error }}</div>

  <div v-if="weatherData" class="weather-info">
    <h2>{{ weatherData.cityName }}</h2>
    <img :src="weatherData.icon" alt="آیکون آب و هوا" />
    <p>
      <strong>دما:</strong> {{ Math.round(weatherData.temp) }} درجه سانتی‌گراد
    </p>
    <p><strong>وضعیت:</strong> {{ weatherData.description }}</p>
  </div>
</template>

<style scoped>


/* 4. استایل فرم جستجو */
form {
  display: flex;
  gap: 10px; /* فاصله بین اینپوت و دکمه */
  margin-bottom: 20px;
}

input[type="text"] {
  flex-grow: 1; /* اینپوت تمام فضای خالی موجود را پر می‌کند */
  border: 1px solid #ddd;
  padding: 12px 15px;
  border-radius: 10px;
  font-size: 16px;
  font-family: "Vazirmatn", sans-serif;
  transition: all 0.3s ease;
  outline: none; /* حذف حاشیه آبی هنگام کلیک */
  text-align: right; /* متن از راست تایپ شود */
}

input[type="text"]:focus {
  border-color: #8fd3f4;
  box-shadow: 0 0 8px rgba(143, 211, 244, 0.5);
}

button[type="submit"] {
  border: none;
  background-color: #eb6969;
  color: white;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-family: "Vazirmatn", sans-serif;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #a84848;
}

/* استایل دکمه وقتی غیرفعال است (در حال بارگذاری) */
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* 5. استایل بخش نمایش نتیجه */
.weather-info {
  margin-top: 25px;
}

.weather-info h2 {
  font-size: 28px;
  margin: 10px 0;
  color: #2c3e50;
}

.weather-info img {
  background-color: #a2e1fc;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.weather-info p {
  font-size: 18px;
  margin: 8px 0;
}
</style>
