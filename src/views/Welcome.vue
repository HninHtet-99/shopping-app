<template>
  
    <div class="welcome p-5">
      <div v-if="showLoginForm">
        <Login></Login>
        <p class="text-muted text-center "> Don't have an account? <span class="text-primary" @click="showLoginForm = !showLoginForm">Sign Up</span></p>
      </div>
      <div v-else>
        <SignUp @enterShoppingRoom="enterShoppingRoom"></SignUp>
        <p class="text-muted text-center ">Already have an account! <span class="text-primary" @click="showLoginForm = !showLoginForm">Login</span></p>
      </div>
      
    </div>

</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useRouter } from "vue-router";

export default {
  components: {
    Login, SignUp },

    setup(){
      let showLoginForm = ref(true);
      let router = useRouter();

      let enterShoppingRoom=()=>{
        router.push({name:'Shopping'})
      }
      return{showLoginForm,enterShoppingRoom}
    }

}
</script>

<style>
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