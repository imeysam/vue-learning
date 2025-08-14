<script setup>
import { useCart } from './composables/useCart';

const {cart} = useCart();
</script>

<template>
  <header class="app-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <li>
          <RouterLink :to="{ name: 'ProductView' }" class="nav-link"
            >خونه</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'TodoView' }" class="nav-link"
            >تسک</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'WeatherView' }" class="nav-link"
            >هاوا</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'BlogView' }" class="nav-link"
            >بلاگ</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'CartView' }" class="nav-link"
            >سبد خرید {{ cart.totalQuantity.toLocaleString('fa-IR') }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="app-container">
      <RouterView />
    </div>
  </main>
</template>

<style>
/* 1. وارد کردن فونت وزیرمتن از گوگل فونت */
@import url("https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap");

/* 2. استایل‌های اصلی و وسط‌چینی */
body {
  /* استفاده از فونت وزیرمتن برای کل صفحه */
  font-family: "Vazirmatn", sans-serif;
  margin: 0;
  /* استفاده از یک گرادیان ملایم برای پس‌زمینه */
  /* background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); */
  background: linear-gradient(120deg, #69c1cb 0%, #8fd3f4 100%);
  color: #333;

  /* کلید اصلی برای وسط‌چینی کامل */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* 3. طراحی کادر اصلی اپلیکیشن */
.app-container {
  /* راست‌چین کردن کل محتوای داخل کادر */
  direction: rtl;

  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  min-width: 25em;
  min-height: 25em;
  text-align: center;
  backdrop-filter: blur(10px); /* افکت شیشه‌ای زیبا */
  border: 1px solid rgba(255, 255, 255, 0.2);
}

h1 {
  color: #2c3e50;
}

/* 6. استایل پیام‌های خطا و بارگذاری */
.error {
  background-color: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 8px;
  margin-top: 15px;
}

.info {
  color: #555;
  font-size: 16px;
  margin-top: 15px;
}

/* استایل‌های مخصوص این کامپوننت با scoped */

.app-header {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 100;
  direction: rtl; /* کل هدر راست‌چین می‌شود */
  border-radius: 20px;
  margin-bottom: 10px;
}

.main-nav {
  display: flex;
  justify-content: space-between; /* لوگو در یک سمت، لینک‌ها در سمت دیگر */
  align-items: center;
  height: 70px;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 700;
  font-size: 20px;
}

.logo-svg {
  width: 40px;
  height: 40px;
  margin-left: 10px; /* فاصله لوگو از متن در زبان فارسی */
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 25px; /* فاصله بین آیتم‌های منو */
}

.nav-link {
  text-decoration: none;
  color: #555;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #84fab0; /* رنگ هاور هماهنگ با تم */
}

/* ایجاد خط زیرین برای لینک فعال */
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  right: 0;
  width: 0;
  height: 2px;
  background-color: #84fab0;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.router-link-exact-active::after {
  width: 100%; /* نمایش خط زیرین در حالت هاور یا فعال بودن */
}

/* استایل مخصوص لینک فعال */
.router-link-exact-active {
  color: #2c3e50;
  font-weight: 700;
}
</style>
