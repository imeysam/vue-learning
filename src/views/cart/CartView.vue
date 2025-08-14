<script setup>
import CartListItemComponent from "@/components/cart/CartListItemComponent.vue";
import CartListSummaryComponent from "@/components/cart/CartListSummaryComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import { useCart } from "@/composables/useCart";

const { cart } = useCart();
</script>

<template>
  <TitleComponent title="سبد خرید" />

  <div class="cart-container">
    <!-- Cart Items -->
    <CartListItemComponent
      v-for="(item, index) in cart.items"
      :key="index"
      :item="item"
      :cart="cart"
    />

    <!-- Cart Summary -->
    <CartListSummaryComponent :cart="cart" />
  </div>
</template>
