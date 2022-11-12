<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" v-if="user">
      <div class="container-fluid ">
        <div>
          <p class="navbar-brand p-0 m-0">Shopping</p>
          <p class="text-primary text-opacity-50 " >Hello, {{user.displayName}}</p>
        </div>
        <div class="d-block d-md-flex align-items-center" style="margin-right:30px">
          <!-- select -->
          <div>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="selectCategory" @change="selectedCategory(selectCategory)">
              <option v-for="category in categories" :key="category" :value="category" >
                {{category}}
              </option>
            </select>
          </div>
          <!-- add to cart and logout -->
          <div style="margin-left:20px; display: flex; align-items: center;" >
            <router-link :to="{name:'AddToCart'}" >
              <span class="material-symbols-outlined text-primary">add_shopping_cart</span>
              <span class="text-info product-number">{{addToCartProductList.length}}</span>
            </router-link>
            <button class="btn m-1" @click="logOut">
              <span class="material-symbols-outlined text-danger">logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import getCategories from '../composables/getCategories'
import getFilteredCategory from '../composables/getFilteredCategory'
import getProductlist from '../composables/getProductlist'

export default {
  setup(){
    let {user} = getUser();
    let {userLogout} = useLogout()
    let logOut = async()=>{
      await userLogout();
    }

    /* show product categories */
    let {categories,getCategoriesDatas} = getCategories()
    getCategoriesDatas();

    /* show product filtered categories */
    let {selectCategory,filteredCategory,selectedCategory} = getFilteredCategory();
    selectedCategory(selectCategory.value);

    /* show add to cart product list */
    let {addToCartProductList,showAddtocart} = getProductlist();

    return{logOut,user,categories,selectCategory,selectedCategory,addToCartProductList}

    

  }

}
</script>

<style>

</style>