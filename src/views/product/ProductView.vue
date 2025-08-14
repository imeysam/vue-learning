<script setup>
import ProductListItemComponent from "@/components/product/ProductListItemComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import { useProduct } from "@/composables/useProduct";
import { onMounted } from "vue";

const { products, cart, loadProducts } = useProduct();

onMounted(loadProducts);
</script>

<template>
  <TitleComponent title="فروشگاه" />

  <div class="products" id="productList">
    <ProductListItemComponent
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      :cart="cart"
    />
  </div>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
