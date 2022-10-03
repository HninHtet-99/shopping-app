<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" v-if="user">
      <div class="container-fluid ">
        <div>
          <p class="navbar-brand p-0 m-0">Shopping</p>
          <p class="text-primary text-opacity-50 " >Hello, {{user.displayName}}</p>
        </div>
        <div class="d-block d-md-flex align-items-center">
          <div class="">
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="selectCategory" @change="selectedCategory(selectCategory)">
              <option v-for="category in categories" :key="category" :value="category" >
                {{category}}
              </option>
            </select>
          </div>
          <div class="">
            <button class="btn btn-primary m-1">shop <span class="p-1 text-bg-light text-info">6</span></button>
            <button class="btn btn-primary m-1">lists</button>
            <button class="btn btn-primary m-1" @click="logOut">logout</button>
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

export default {
  setup(){
    let {user} = getUser();
    let {userLogout} = useLogout()
    let logOut = async()=>{
      await userLogout();
    }

    let {categories,getCategoriesDatas} = getCategories()
    getCategoriesDatas();

    
    let {selectCategory,filteredCategory,selectedCategory} = getFilteredCategory();
    selectedCategory(selectCategory.value);
    return{logOut,user,categories,selectCategory,selectedCategory}
  }

}
</script>

<style>

</style>