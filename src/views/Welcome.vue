<template>
  
    <div class="welcome p-5 mt-5 rounded-4">
      <div v-if="showLoginForm">
        <Login></Login>
        <p class="text-muted text-center "> Don't have an account? <span class="text-primary" @click="showLoginForm = !showLoginForm">Sign Up</span></p>
      </div>
      <div v-else>
        <SignUp></SignUp>
        <p class="text-muted text-center ">Already have an account! <span class="text-primary" @click="showLoginForm = !showLoginForm">Login</span></p>
      </div>
      
    </div>

</template>

<script>
import { ref } from '@vue/reactivity'
  
  import Login from '../components/Login'
import SignUp from '../components/SignUp'
export default {
  components: {
    Login, SignUp },

    setup(){
      let showLoginForm = ref(true);

      return{showLoginForm}
    }

}
</script>

<style>
.welcome{
  background-color: #fafafa;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}
.welcome form{
  max-width: 500px;
  margin: 10px auto;
}
form .form-group{
  margin: 5px 0px;
}
.welcome span{
  cursor: pointer;
}
</style>