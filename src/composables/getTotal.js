import { ref } from "vue";
import getProductlist from "./getProductlist";
let {addToCartProductList,showAddtocart} = getProductlist();

/* calculate total  */
let totalPrice = ref(0);
let productCost = ()=>{
    totalPrice.value= addToCartProductList.value.reduce((x,y)=>{
        return x + y.price * y.quantity;
    },0)
    
}
/* calculate quantity */
let increaseQty=(id)=>{
    let subProduct = addToCartProductList.value.find(el => el.id == id);
    if (subProduct) {
        subProduct.quantity++;
    } 
    productCost();
};

let decreaseQty=(id)=>{
    let subProduct = addToCartProductList.value.find(el => el.id == id);
    if (subProduct) {
        if (subProduct.quantity>1) {
            subProduct.quantity--; 
        }
        productCost();
    }
}
 /* cancel product */
let cancel =(id)=>{
    addToCartProductList.value = addToCartProductList.value.filter((el)=>{
        return el.id != id;
    })
    productCost();
}

let getTotal = ()=>{
    return {increaseQty,decreaseQty,totalPrice,productCost,cancel}
}
export default getTotal