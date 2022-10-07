import { ref } from "vue"

let addToCartProductList = ref([])
let showAddtocart = (p)=>{
    let item = addToCartProductList.value.find( el => el.id === p.id)
    if(item){
        alert('selected item')
    }else{
        addToCartProductList.value.push(p);
    }
    console.log(addToCartProductList.value)
    } 
    


let getProductlist = ()=>{
    return {addToCartProductList,showAddtocart}
}
export default getProductlist