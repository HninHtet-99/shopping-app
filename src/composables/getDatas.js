import { ref } from "vue";
let getDatas = ()=>{
    let products = ref([]);
    let error = ref(null);
    let load = async()=>{
       try {
        let res = await fetch('https://fakestoreapi.com/products');
        if (res.status === 404) {
            throw new Error('not found URL')
        }
        let datas = await res.json();
        products.value = datas;
       } catch (err) {
        error.value = err.message
       }
    }
    return{error,products,load}
}

export default getDatas