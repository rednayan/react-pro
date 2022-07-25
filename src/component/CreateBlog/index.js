import React,{useEffect, useState} from 'react'
import { db} from '../../firebase'
import { addDoc, collection } from 'firebase/firestore';
import { storage } from '../../firebase'
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage'
import { useAuth } from '../../contexts/AuthContext';
import { LoadingButton } from '@mui/lab';
import {Button,TextareaAutosize,Stack, TextField,Grid} from "@mui/material" 


export default function CreateBlog() {
    const [description,setDescription] = useState();
    const [image,setImage] = useState();
    const [title,setTitle] = useState();
    const blogCollectionRef = collection(db,"Blogs");
    const [imageLoading,setImageLoading] = useState(false);
    const [submitLoading,setSubmitLoading] = useState(false);
    const [imageURL,setimageURL] = useState();
    const [user,setUser] = useState();
    const {currentUser} = useAuth();

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }
    const uploadImage = async(e) => {
        const imageRef = ref(storage,`images/${image.name}`);
        setImageLoading(true);
        await uploadBytes(imageRef,image).then((response)=>{
        }).catch((error)=>{
            alert(error)
        });
        setImageLoading(false);
        await getDownloadURL(imageRef).then((url) => {
            setimageURL(url)
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setSubmitLoading(true)
        await addDoc(blogCollectionRef,{title:title,description:description,image:imageURL,user:user}).then((response) => {
            setDescription("");
            setTitle("");
            alert("uploaded")
        }).catch((error) => {
            alert(error);
        }); 
        setSubmitLoading(false);
    }
    useEffect(() =>{
        setUser(currentUser.email)
    },[])


  return (
            <Stack spacing = {3} marginTop={1} padding ={2}
                sx={{
                        width: 400,
                        position:"sticky",
                        top:"0",
                        borderRadius:"10px",
                        boxShadow:"0px -1px 15px 2px rgba(196,196,196,1)"
                        }}>
                <TextField 
                    label="title" 
                    variant="outlined" 
                    onChange = {handleTitle}
                    />
                <TextareaAutosize
                    minRows={10}
                    aria-label="empty textarea"
                    placeholder="Description"
                    onChange = {handleDescription}
                    />
                <Stack direction="row" alignItems="center"> 
                     
                    <input type="file"
                        onChange={handleImage}
                    />    
                    <LoadingButton
                        loading = {imageLoading}
                        variant = "outlined"
                        component = "label"
                        onClick={uploadImage}
                        >
                        Upload Image
                    </LoadingButton>
                </Stack>
                <LoadingButton
                    loading = {submitLoading}
                    variant = "contained"
                    onClick={handleSubmit}
                    >
                    Submit
                </LoadingButton>
            </Stack>
  )
}
