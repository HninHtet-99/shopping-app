<template>
    <div class="cart d-flex justify-content-around align-items-center">
        <img :src="cart.image" alt="">
        <span class="text-bold text-primary" style="width: 200px">{{title}}</span>
        <div class="d-flex flex-column align-items-center justify-content-center">
            <button class="btn btn-outline-dark" @click="increaseQty(cart.id)" >+</button>
            <span class="my-2" >{{cart.quantity}}</span>
            <button class="btn btn-outline-dark" @click="decreaseQty(cart.id)">-</button>
        </div>
        <h6 style="width: 150px" >Price: $ {{cart.price*cart.quantity}}</h6>
        <span class="material-symbols-outlined delete-icon" @click="cancel(cart.id)">cancel</span>

    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import getTotal from '../composables/getTotal';
export default {
    props:['cart'],
    setup(props){
        let title = ref('');
        title.value =  props.cart.title.substring(0,20)+'...';
        
        /* get product qty and total price */
        let {increaseQty,decreaseQty,totalPrice,productCost,cancel} = getTotal();
        productCost();

        return{ title,increaseQty,decreaseQty,cancel}
        
    }
}
</script>

<style>

</style>