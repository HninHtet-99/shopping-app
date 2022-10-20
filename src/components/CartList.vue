<template>
    <div class="cart-list" v-for="cart in carts" :key="cart.id">
        <SingleCart :cart="cart" @calculateTotal="calculateTotal"></SingleCart>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import SingleCart from './SingleCart'
export default {
  props:['carts'],
  components: { SingleCart },
  setup(){
    let total = ref([])
    let calculateTotal = (price)=>{
     total.value.push(price)
     console.log(total.value)
     let totalPrice = total.value.reduce((prev,current)=>prev+current)
     console.log(totalPrice);
    }

    return {calculateTotal}
  }
}
</script>

<style>

</style>