import { ref } from "vue";

/* show product list in add to cart */
let addToCartProductList = ref([])
let showAddtocart = (p)=>{
    let item = addToCartProductList.value.find( el => el.id === p.id)
    if(item){
        alert('selected item')
    }else{
        addToCartProductList.value.push({...p,quantity :1});
    }
    } 

let getProductlist = ()=>{
    return {addToCartProductList,showAddtocart}
}
export default getProductlist