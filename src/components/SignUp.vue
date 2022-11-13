<template>
  <div class="signup">
    <h4 class="text-secondary mb-4 text-center">Sign Up</h4>

    <form @submit.prevent="signup">

        <div class="form-group row">
            <div class="col-12 col-md-6">
                <input type="text" class="form-control" v-model="firstName" placeholder="First name" required>
            </div>
            <div class="col-12 col-md-6">
                <input type="text" class="form-control" v-model="secondName" placeholder="Last name" required>
            </div>
        </div>

        <div class="form-group row">
            <div class="col">
                <input type="text" class="form-control" v-model="email" placeholder="email" required>

            </div>
        </div>

        <div class="form-group row">
            <div class="col">
                <input type="password" class="form-control" v-model="password" placeholder="password">
            </div>
        </div>

        <div class="form-group row">
            <div class="col">
                <p class="text-danger" v-if="error">{{error}}</p>
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
import useSignup from '../composables/useSignup'

export default {
    setup(props,context){
        let firstName = ref('');
        let secondName = ref('');
        let password = ref('');
        let email = ref('');
        /* sign up */
        let {error,createAccount} = useSignup();
        let signup=async()=>{
          let res = await createAccount(email.value,password.value,firstName.value,secondName.value)
          if (res) {
            context.emit('enterShoppingRoom')
          }
        }
        return{firstName,secondName,password,email,signup,error}
    }

}
</script>

<style>

</style>