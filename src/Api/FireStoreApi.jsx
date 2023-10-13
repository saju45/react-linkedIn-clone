import {addDoc,collection, onSnapshot,doc,updateDoc, query, where,setDoc, deleteDoc} from 'firebase/firestore'
import { firestore } from '../firebase'
import { toast } from 'react-toastify'


const collectionRef=collection(firestore,'posts')
const userRef =collection(firestore,"users")
const likeRef=collection(firestore,"likes");
const commentRef=collection(firestore,'comments')
const connectionRef=collection(firestore,'connections')

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

export const getAllUsers=(setAllUsers)=>{
    
    onSnapshot(userRef, (response)=>{
        setAllUsers(response.docs.map((docs)=>{
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

export const likePost=async(userId,postId,liked)=>{
    
    try {
        let docToLike=doc(likeRef,`${userId}}_${postId}` )
        if(liked){
            deleteDoc(docToLike)
        }else{
            await setDoc(docToLike,{userId,postId})
        }
    } catch (error) {
        console.error(error);
    }

}

export const getLikes=(userId,postId,setLikedCount,setLiked)=>{

    try {
        let likeQuary=query(likeRef,where('postId','==',postId));
        onSnapshot(likeQuary,(response)=>{
            let likes=response.docs.map((doc)=>{
                return doc.data()
            })
            let likeCount=likes.length;
            setLikedCount(likeCount)
            const isLiked=likes.some((like)=> like.userId===userId)
            setLiked(isLiked)
            // console.log(isLiked);
        })
    } catch (error) {
        console.error(error);
    }
}

export const postComment=async(postId,comment,timeStamp,name)=>{

    try {
        await addDoc(commentRef,{postId,comment,timeStamp,name})
    } catch (error) {
        console.error(error);
    }
}

export const getComments=(postId,setComments)=>{

    try {
        let singelPostCommentQuary=query(commentRef,where('postId','==',postId))
        onSnapshot(singelPostCommentQuary, (response)=>{
        
            setComments(response.docs.map((doc)=>{
                return {...doc.data(),id:doc.id}
            }))
        })
    } catch (error) {
        console.error(error);
    }
}


export const updatePostApi=(id,status,postImage)=>{

    let docToUpdate=doc(collectionRef,id)

    try {
        updateDoc(docToUpdate,{status,postImage})
        toast.success("post has been updated")

    } catch (error) {
        console.error(error);
    }

}

export const deletePost=(id)=>{

    let docToDelete=doc(collectionRef,id)

    try {
        deleteDoc(docToDelete)
        toast.success("Post has been deleted!")
    } catch (error) {
        console.error(error);
    }

}

export const addConnection=async(userId,targetId)=>{
    
    try {
        let connectionToAdd=doc(connectionRef,`${userId}}_${targetId}` )
        await setDoc(connectionToAdd,{userId,targetId})
        toast.success("Connection Added")
    } catch (error) {
        console.error(error);
    }

}

export const getConnection=(userId,targetId,setIsConnected)=>{

    try {
        let connectionQuary=query(connectionRef,where('targetId','==',targetId));
        onSnapshot(connectionQuary,(response)=>{
            let connections=response.docs.map((doc)=>{
                return doc.data()
            })
         
            const isConnected=connections.some((connection)=> connection.userId===userId)
            setIsConnected(isConnected)
            // console.log(isLiked);
        })
    } catch (error) {
        console.error(error);
    }
}

