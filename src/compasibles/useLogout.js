import { ref } from '@vue/reactivity';
import { auth } from "../firebase/config";
let error =ref(null);
let userLogout=async()=>{
    try {
        await auth.signOut();
        console.log('user logged out');
      } catch (err) {
        error.value = err.message;
      }
}

let useLogout = ()=>{
    
    return {userLogout}
}

export default useLogout