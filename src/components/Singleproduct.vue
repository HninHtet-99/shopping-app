<template>
  <div class="card mb-3" style="width: 18rem;">
        <img class="card-img-top" :src='product.image' alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{product.title}}</h5>
            <p class="card-text">{{des}}</p>
            <p>{{product.category}}</p>
            <div class="d-flex justify-content-between align-items-center">
                <p class="mb-0">price <span class="text-primary">$ {{product.price}}</span></p>
                <button class="btn btn-primary" @click="addToCard">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    props:['product'],
    setup(props){
        let total = ref([]);
        let des = props.product.description.substring(0,100)+'...';
        let addToCard=()=>{
            console.log(props.product);
        }
        return{des,addToCard}
    }
}
</script>

<style>
img{
    height: 220px;
}
</style>