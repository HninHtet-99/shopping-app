<template>
  <div class="bottom-nav">
    <router-link :to="{name:'Shopping'}" style="display:flex; text-decoration: none;">
      <span class="material-symbols-outlined">keyboard_double_arrow_left</span>
      Back to shop
    </router-link>
    <h5>Total </h5>
    <span>$ {{totalPrice.toFixed(2)}}</span>
</div>
</template>

<script>
import getTotal from '@/composables/getTotal';
export default {
  setup(){
  /* get total product price */
  let {increaseQty,decreaseQty,totalPrice,productCost} = getTotal();
  return{totalPrice}
  }
}
</script>

<style>

</style>