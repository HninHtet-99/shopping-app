<template>
  <div>
    <Navbar></Navbar>
    <Products></Products>
  </div>
</template>

<script>
import Products from '../components/Products'
import { watch } from 'vue'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
export default {
  components: {
    Products, Navbar },
  setup(){
    let {user} = getUser();
    let router = useRouter();
    watch(user,()=>{
      if (!user.value) {
        router.push('/')
      }
    })
  }
}
</script>

<style>

</style>