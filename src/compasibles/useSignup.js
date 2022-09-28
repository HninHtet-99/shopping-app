import { ref } from "vue";
import {auth} from '../firebase/config'

let error = ref(null);
let createAccount=async(email,password,firstName,secondName)=>{
    try {
        let res = await auth.createUserWithEmailAndPassword(email,password)
        res.user.updateProfile({displayName:firstName+' '+secondName});
        if(!res){
            throw new Error("could not create new account")
        }
        return res;

      } catch (err) {
        console.log(err.message);
      }
}

let useSignup=()=>{
    return{error,createAccount}
}

export default useSignup;