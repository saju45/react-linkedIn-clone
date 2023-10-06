import {addDoc,collection, onSnapshot,doc,updateDoc, query, where} from 'firebase/firestore'
import { firestore } from '../firebase'
import { toast } from 'react-toastify'

const collectionRef=collection(firestore,'posts')
const userRef =collection(firestore,"users")

export const AddPost=(object)=>{

  
    addDoc(collectionRef,object)
    .then(()=>{
        toast.success("Document has been Add successfully");
    }).catch(()=>{
        toast.error("something is wrong");
    })
}


 export const getStatus=(setAllStatus)=>{
    
    onSnapshot(collectionRef, (response)=>{
        setAllStatus(response.docs.map((docs)=>{
            return {...docs.data(),id:docs.id}
        }));
    })
}

export const getSigleStatus=(setAllStatus,userId)=>{
    const singlePostquaery=query(collectionRef,where('userId','==',userId ))
    
    onSnapshot(singlePostquaery,(response)=>{
        setAllStatus(response.docs.map((docs)=>{
            return {...docs.data(),id:docs.id}
        }));
    })
}


export const getSignleUser=(setCurrentUser,email)=>{
    const singlePostquaery=query(userRef,where('email','==',email ))
    
    onSnapshot(singlePostquaery,(response)=>{
        setCurrentUser(response.docs.map((docs)=>{
            return {...docs.data(),id:docs.id}
        })[0]);
    })
}

export const addUserData=(object)=>{
    addDoc(userRef,object)
    .then(()=>{})
    .catch((error)=>{console.error(error)})
}

export const getCurrentUser=(setCurrentUser)=>{

    const currentEmail=localStorage.getItem('userEmail')
    onSnapshot(userRef, (response)=>{
        setCurrentUser(response.docs.map((docs)=>{
            return {...docs.data(),userId:docs.id}
        }).filter((item)=>{
            return item.email === currentEmail;
        })[0]
        )
    })
}

export const editProfile=(userId,payload)=>{

    const userToEdit=doc(userRef,userId)

    updateDoc(userToEdit,payload)
    .then(()=> {
        toast.success("Profile has been updated successfully")
    })
    .catch(()=>{
        toast.error("something wrong check again")
    })

}