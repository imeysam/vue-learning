import { ref } from "vue";
import productsJson from "/db/products.json";
import { useCart } from "./useCart";

export function useProduct() {
  const products = ref([]);

  const loadProducts = () => {
    products.value = productsJson;
  };

  const { cart } = useCart();

  return {
    products,
    cart,
    loadProducts,
  };
}
