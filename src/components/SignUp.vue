<template>
  <div class="signup">
    <h4 class="text-secondary mb-4 text-center">Sign Up</h4>

    <form @submit.prevent="signup">

        <div class="form-group row">
            <div class="col-12 col-md-6">
                <input type="text" class="form-control" v-model="firstName" placeholder="First name">
            </div>
            <div class="col-12 col-md-6">
                <input type="text" class="form-control" v-model="secondName" placeholder="Last name">
            </div>
        </div>

        <div class="form-group row">
            <div class="col">
                <input type="text" class="form-control" v-model="email" placeholder="email">

            </div>
        </div>

        <div class="form-group row">
            <div class="col">
                <input type="password" class="form-control" v-model="password" placeholder="password">
            </div>
        </div>

        <div class="form-group row">
            <div class="col">
                <button class="btn btn-outline-primary">Sign Up</button>
            </div>
        </div>

    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../compasibles/useSignup'

export default {
    setup(){
        let firstName = ref('');
        let secondName = ref('');
        let password = ref('');
        let email = ref('');
        
        let {error,createAccount} = useSignup();
        let signup=async()=>{
          let res = await createAccount(email.value,password.value,firstName.value,secondName.value)
          console.log(res.user);
        }
        return{firstName,secondName,password,email,signup}
    }

}
</script>

<style>

</style>