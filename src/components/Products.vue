<template>
    <div>
        <h4 v-if="error" class="text-danger text-center">{{error}}</h4>
        <div class="row" v-else>
            <ProductList :products="products"></ProductList>
        </div>
    </div>
</template>

<script>
import ProductList from './ProductList'
import getDatas from '../composables/getDatas'
export default {
  components: { ProductList },
    setup(){
        let {error,products,load} = getDatas();

        load();

        return {products,error}
    }
}
</script>

<style>

</style>