<template>
  <div class="p-3">
    <h2 class="my-3">Your Shopping Cart</h2>

    <div v-if="addToCartProductList.length">
        <CartList :carts="addToCartProductList"></CartList>
        <BottomNav></BottomNav>
    </div>
    <div class="" v-else>
        <p class="text-danger text-center" >There's no products.</p>
        <router-link :to="{name:'Shopping'}" style="display:flex; text-decoration: none;">
            <span class="material-symbols-outlined">keyboard_double_arrow_left</span>
            Back to shop
        </router-link>
    </div>
  </div>
</template>

<script>
import BottomNav from '../components/BottomNav'
import CartList from '../components/CartList'
import getProductlist from '@/composables/getProductlist'
export default {
  components: {
    BottomNav, CartList },
    setup(){
    let {addToCartProductList,showAddtocart}= getProductlist();
    
    return {addToCartProductList}

    }
}
</script>

<style>
.cart{
    max-width: 700px;
    margin: 10px 30px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.24);
    border-radius: 16px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1.5px);
    border: 1px solid rgba(255, 255, 255, 0.28);
}
.cart img{
    width: 200px;
    height: 130px;
    border-radius: 10px;
}

</style>