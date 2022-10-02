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
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="selectCategory" @change="filteredCategory()">
              <option v-for="category in categories" :key="category" :value="category" >{{category}}</option>
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
import { ref } from '@vue/reactivity';
export default {
  setup(){
    let {user} = getUser();
    let {userLogout} = useLogout()
    let logOut = async()=>{
      await userLogout();
    }
    let categories = ref([]);
    let getCategory =async()=>{
     let res =  await fetch('https://fakestoreapi.com/products/categories')
     categories.value = await res.json();
    }
    getCategory();
    let selectCategory= ref('');
    let filteredCategory = ()=>{
      
    }
    
    return{logOut,user,categories,filteredCategory,selectCategory}
  }

}
</script>

<style>

</style>