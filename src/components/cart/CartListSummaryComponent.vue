<script setup>
defineProps(["cart"]);
</script>

<template>
  <div v-if="cart.totalQuantity" class="cart-summary">
    <p>
      تعداد کل:
      <strong>{{ cart.totalQuantity.toLocaleString("fa-IR") }}</strong>
    </p>
    <p>
      مبلغ کل:
      <strong>{{ cart.totalAmount.toLocaleString("fa-IR") }}</strong> تومان
    </p>
    <button class="btn-store">ثبت سفارش</button>
  </div>
  <div v-else>
    <p>سبد خرید شما خالی است.</p>
    <RouterLink class="btn-store" :to="{ name: 'ProductView' }"
      >برو به فروشگاه</RouterLink
    >
  </div>
</template>

<style scoped>

.cart-summary {
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #ddd;
  text-align: center;
  margin-top: 1rem;
}

.btn-store {
  background: #28a745;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  margin-top: 0.8rem;
  cursor: pointer;
  font-size: 1rem;
}

.btn-store:hover {
  background: #218838;
}
</style>
