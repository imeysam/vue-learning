<script setup>
defineProps(['cart', 'item'])
</script>

<template>
  <div class="cart-item">
    <img :src="item.image" alt="" class="item-image" />
    <div class="item-details">
      <h3 class="item-title">{{ item.title }}</h3>
      <p class="item-amount">{{ item.amount.toLocaleString("fa-IR") }}</p>
      <!-- <p class="item-quantity">
          تعداد: {{ item.quantity.toLocaleString("fa-IR") }}
        </p> -->
    </div>
    <div class="quantity-controls">
      <button @click="cart.addItem(item)">+</button>
      <span>{{ item.quantity.toLocaleString("fa-IR") }}</span>
      <button @click="cart.removeItem(item)">−</button>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  /* max-width: 500px; */
  margin: auto;
  direction: rtl;
}

.cart-item {
  display: flex;
  align-items: center;
  background: #fff;
  margin-bottom: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-left: 0.8rem;
}

.item-title {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}

.item-amount {
  color: green;
  margin: 0.3rem 0;
}

.item-quantity {
  color: #666;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}


.quantity-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto; /* pushes to far left in RTL */
}

.quantity-controls button {
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 4px;
  background: #ddd;
  cursor: pointer;
  font-size: 16px;
}

.quantity-controls button:hover {
  background: #bbb;
}

.quantity-controls span {
  margin: 4px 0;
  font-weight: bold;
}
</style>