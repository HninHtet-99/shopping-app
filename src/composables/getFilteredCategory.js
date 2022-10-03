import { computed, ref} from "vue"
import getDatas from './getDatas'
let selectCategory = ref('');

let getFilteredCategory = ()=>{
    
    let selectedCategory=(x)=>{
       selectCategory.value = x;
    }
    
   let{error,products,load} = getDatas();
   load()  
    let filteredCategory = computed(()=>{
        return products.value.filter((product)=>{
           return product.category == selectCategory.value
        })
        
        // console.log(products.value);
    })

    return{selectCategory,filteredCategory,selectedCategory}
}

export default getFilteredCategory