<template>
    <div class="cart d-flex justify-content-around align-items-center">
        <img :src="cart.image" alt="">
        <span class="text-bold text-primary" style="width: 200px">{{title}}</span>
        <div class="d-flex flex-column align-items-center justify-content-center">
            <button class="btn btn-outline-dark" @click="increaseQty" >+</button>
            <span class="my-2" >{{quantity}}</span>
            <button class="btn btn-outline-dark" @click="decreaseQty">-</button>
        </div>
        <h6 style="width: 150px" >Price: $ {{totalPrice}}</h6>
        <span class="delete-icon bg-danger p-2"><span class="icon text-light">x</span></span>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props:['cart'],
    setup(props,context){
        let title = ref('');
        title.value =  props.cart.title.substring(0,20)+'...';

        let quantity = ref(props.cart.quantity);
        let totalPrice = ref()

        let calculatePrice = ()=>{
            totalPrice.value= quantity.value * props.cart.price;
            context.emit('calculateTotal',totalPrice.value)
        }
        
        calculatePrice();

        let increaseQty = ()=>{
            quantity.value++;
            calculatePrice();
            
        }
        let decreaseQty= ()=>{
            if (quantity.value > 1) {
                quantity.value--;
                calculatePrice();
            }
        }
        
        return{ title,quantity,increaseQty,decreaseQty,totalPrice}
    }
}
</script>

<style>

</style>