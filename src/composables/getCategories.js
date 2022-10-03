import { ref } from "vue";
let getCategories = ()=>{
    let categories = ref([]);
    let getCategoriesDatas =async()=>{
    let res =  await fetch('https://fakestoreapi.com/products/categories')
    categories.value = await res.json();
    
    }
    
    return{categories,getCategoriesDatas}
}
export default getCategories
