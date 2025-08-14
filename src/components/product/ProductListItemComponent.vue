<script setup>
defineProps(["product", "cart"]);
</script>

<template>
  <div class="product-card">
    <div class="product-info">
      <img :src="product.image" :alt="product.title" />
      <div class="product-title">{{ product.title }}</div>
      <div class="product-amount">
        {{ product.amount.toLocaleString("fa-IR") }} تومان
      </div>
      <button
        v-if="!cart.exists(product)"
        @click="cart.addItem(product)"
        class="add-to-cart"
      >
        اضافه به سبد
      </button>
      <div v-else>
        <button @click="cart.addItem(product)" class="add-to-cart">+</button>
        <span class="span-quantity">{{
          cart.exists(product)?.quantity?.toLocaleString("fa-IR")
        }}</span>
        <button @click="cart.removeItem(product)" class="add-to-cart">-</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.product-card {
  background: #fff;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  border-color: #ccc;
}

.product-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.product-info {
  padding: 15px;
  width: 100%;
}

.product-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}

.product-amount {
  color: #e63946;
  font-size: 14px;
  margin-bottom: 12px;
}

.add-to-cart {
  border: none;
  background-color: #eb6969;
  color: white;
  padding: 7px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-family: "Vazirmatn", sans-serif;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #a84848;
}

.span-quantity{
  padding: 10px;
}
</style>
