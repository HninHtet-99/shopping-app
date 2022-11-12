<template>
  <div class="col-12 col-md-4" v-for="product in products" :key="product.id">
    <Singleproduct :product="product" @addtocart="addtocart"></Singleproduct>
  </div>
</template>

<script>
import Singleproduct from './Singleproduct'
import getProductList from '../composables/getProductlist'

export default {
  components: { Singleproduct },
  props:['products'],
  setup(){
    /* show filtered products */
    let {addToCartProductList,showAddtocart} = getProductList();
      let addtocart = (p)=>{
        showAddtocart(p);
      }
    
    
    return{addtocart}
  }

}
</script>

<style>

</style>