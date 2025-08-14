import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        items: JSON.parse(localStorage.getItem('cart')) || []
    }),
    actions: {
        addItem(product){
            const exists = this.items.find(item => item.id == product.id);
            if(exists){
                exists.quantity ++;
            }
            else{
                this.items.push({...product, quantity: 1});
            }
            localStorage.setItem('cart', JSON.stringify(this.items));
        },
        removeItem(product){
            // this.items = this.items.filter(item => item.id != product.id);
            const exists = this.items.find(item => item.id == product.id);
            if(exists){
                exists.quantity --;
            }
            
            if(exists.quantity < 1){
                this.items = this.items.filter(item => item.id != product.id);
            }

            localStorage.setItem('cart', JSON.stringify(this.items));
        },
        exists(product){
            return this.items.find(item => item.id == product.id);
        },
    },
    getters:{
        totalQuantity: (state) => {
            let total_quantity = 0;
            state.items.forEach(element => {
                total_quantity += element.quantity;
            });
            return total_quantity;
        },
        totalAmount: (state) => {
            let total_amount = 0;
            state.items.forEach(element => {
                total_amount += (element.amount * element.quantity);
            });
            return total_amount;
        }
    }
});