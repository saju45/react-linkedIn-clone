
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { auth } from '../firebase'
import { toast } from 'react-toastify';


export const LoginApi =async (email,password) => {
 
    try {
        const res= await signInWithEmailAndPassword(auth,email,password)
        toast.success("signed In to LinkedIn")        
        return res;
    } catch (error) {
        toast.error("please check your Crediantials")
    }
}


export const RegisterApi = async(email,password) => {
 
    try {
        const res=await createUserWithEmailAndPassword(auth,email,password)
        toast.success("Account created ")
        return res;
    } catch (error) {
        toast.error("Can't create your account ");
    }
}

export const SignInWithGoogle = async() => {

    try {
        const googleProvider= new GoogleAuthProvider()
        const res=await signInWithPopup(auth,googleProvider)
        toast.success("sign in with google")
        return res;
    } catch (error) {
        toast.error("something is wrong");
    }
}

export const LogoutApi=async()=>{

    try {
        const res= await signOut(auth)
        toast.success("logout ")
        return res;
    } catch (error) {
        toast.error("can't logout now")
    }
}

