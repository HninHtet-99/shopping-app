<template>
    <div class="cart d-flex justify-content-around align-items-center">
        <img :src="cart.image" alt="">
        <span class="text-bold text-primary" style="width: 200px">{{title}}</span>
        <div class="d-flex flex-column align-items-center justify-content-center">
            <button class="btn btn-outline-dark">+</button>
            <span class="my-2">01</span>
            <button class="btn btn-outline-dark">-</button>
        </div>
        <h6 style="width: 150px">Price: $ {{cart.price}}</h6>
        <span class="delete-icon bg-danger p-2"><span class="icon text-light">x</span></span>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props:['cart'],
    setup(props){
        let title = ref('');
        title.value =  props.cart.title.substring(0,20)+'...';
        return{ title}
    }
}
</script>

<style>

</style>