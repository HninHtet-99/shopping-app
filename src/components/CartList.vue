<template>
    <div class="cart-list" v-for="cart in carts" :key="cart.id">
        <SingleCart :cart="cart"></SingleCart>
    </div>
</template>

<script>
import SingleCart from './SingleCart'
export default {
  props:['carts'],
  components: { SingleCart },

}
</script>

<style>

</style>