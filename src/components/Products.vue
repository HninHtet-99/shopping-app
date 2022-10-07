<template>
    <div>
        <h4 v-if="error" class="text-danger text-center">{{error}}</h4>
        <div class="row" v-else>
                <ProductList v-if="selectCategory" :products="filteredCategory" ></ProductList>
                <ProductList v-else :products="products" ></ProductList>
        </div>
    </div>
</template>

<script>
import ProductList from './ProductList'
import getDatas from '../composables/getDatas'
import getFilteredCategory from '../composables/getFilteredCategory'

export default {
  components: { ProductList },
    setup(){
        let {error,products,load} = getDatas();

        load();
        let {selectCategory,filteredCategory,selectedCategory} = getFilteredCategory();
       
        return {products,error,filteredCategory,selectCategory}
    }
}
</script>

<style>

</style>