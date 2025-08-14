import { useCartStore } from "@/stores/cartStore"
import { readonly } from "vue";

export const useCart = () => {
    const cart = useCartStore();

    return {
        cart: readonly(cart),
    }
}