
import { storage } from "../firebase";
import  {ref,getDownloadURL,uploadBytesResumable} from 'firebase/storage'
import { editProfile } from "./FireStoreApi";


export const uploadImageApi=(file,userId,setProgress,setModalOpen,setCurrentImage)=>{
    const profilePicsRef=ref(storage,`profileImages/${file.name}`)
    const uploadTask=uploadBytesResumable(profilePicsRef,file)

    uploadTask.on('state_changed',(snapshot)=>{
        const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
    
            setProgress(progress);
    },(error)=>{
        console.log(error);
    },()=>{
        getDownloadURL(uploadTask.snapshot.ref)
        .then((response)=>{

            try {
                editProfile(userId,{imageLink:response})
                setModalOpen(false)
                setCurrentImage({})
                setProgress(0)
            } catch (error) {
                console.error(error);
            }

        })
    })
}