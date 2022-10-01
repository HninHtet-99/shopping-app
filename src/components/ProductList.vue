<template>
  <div class="col-12 col-md-4" v-for="product in products" :key="product.id">
    <Singleproduct :product="product"></Singleproduct>
  </div>
</template>

<script>
import Singleproduct from './Singleproduct'
export default {
  components: { Singleproduct },
  props:['products'],
  setup(props){
    
  }

}
</script>

<style>

</style>