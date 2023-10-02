import {addDoc,collection} from 'firebase/firestore'
import { firestore } from '../firebase'
import { toast } from 'react-toastify'

const collectionRef=collection(firestore,'posts')

export const AddPostApi=(status)=>{

    const obj={
        status:status
    }
    addDoc(collectionRef,obj)
    .then(()=>{
        toast.success("Document has been Add successfully");
    }).catch(()=>{
        toast.error("something is wrong");
    })
}