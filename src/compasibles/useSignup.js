import { ref } from "vue";
import {auth} from '../firebase/config'

let error = ref(null);
let createAccount=async(email,password,firstName,secondName)=>{
    try {
        let res = await auth.createUserWithEmailAndPassword(email,password)
        if(!res){
            throw new Error("could not create new account")
        }
        res.user.updateProfile({displayName:firstName+' '+secondName});
        return res;

      } catch (err) {
        console.log(err.message);
      }
}

let useSignup=()=>{
    return{error,createAccount}
}

export default useSignup;