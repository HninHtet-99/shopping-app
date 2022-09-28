<template>
    <div class="login">
      <h4 class="text-secondary mb-4 text-center">Login</h4>
  
      <form @submit.prevent="login">
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
                <p class="text-danger" v-if="error">{{error}}</p>
            </div>
          </div>
  
          <div class="form-group row">
              <div class="col">
                  <button class="btn btn-outline-primary">Login</button>
              </div>
          </div>
  
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from '@vue/reactivity'
  import useLogin from '@/compasibles/useLogin';
  export default {
      setup(){
          let password = ref('');
          let email = ref('');
  
          let {error,loginAccount} = useLogin();

          let login=async()=>{
             let res =  await loginAccount(email.value,password.value)
             console.log(res);
          }
          return{password,email,login,error}
      }
  
  }
  </script>
  
  <style>
  
  </style>