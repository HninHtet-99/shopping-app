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
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
import BottomNav from '../components/BottomNav'
import CartList from '../components/CartList'
import getProductlist from '@/composables/getProductlist'
import { watch } from 'vue';

export default {
  components: {
    BottomNav, CartList },
    setup(){
    /* watch user */
    let {user} = getUser();
    let router = useRouter();
    if(!user.value){
        router.push('/');
      }
    // watch(user,()=>{
      
    // });
    
    /* get add to cart product */
    let {addToCartProductList,showAddtocart}= getProductlist();
    
    return {addToCartProductList}

    }
}
</script>

<style>


</style>