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
            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="">
            <button class="btn btn-primary m-1">shop</button>
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
export default {
  setup(){
    let {user} = getUser();
    let {userLogout} = useLogout()
    let logOut = async()=>{
      await userLogout();
    }
    
    
    return{logOut,user}
  }

}
</script>

<style>

</style>