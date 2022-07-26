import React,{useEffect, useState} from 'react'
import { db} from '../../firebase'
import { doc,getDoc,addDoc, collection,updateDoc } from 'firebase/firestore';
import { storage } from '../../firebase'
import { ref,uploadBytes,getDownloadURL } from 'firebase/storage'
import { useNavigate,useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoadingButton } from '@mui/lab';
import {Button,TextareaAutosize,Stack, TextField,Grid,Typography} from "@mui/material" 


export default function UpdateBlog() {
    const {id} = useParams();
    const docRef = doc(db, "Blogs", `${id}`);
    const [description,setDescription] = useState("");
    const [image,setImage] = useState();
    const [title,setTitle] = useState("");
    const [imageLoading,setImageLoading] = useState(false);
    const [submitLoading,setSubmitLoading] = useState(false);
    const [imageURL,setimageURL] = useState("");
    const [user,setUser] = useState();
    const {currentUser} = useAuth();
    const navigate = useNavigate();

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
        }).catch((error) => {
            alert(error);
        })
    }
    const updateBlog = async() =>{
        await updateDoc(docRef,{title:title,image:imageURL,description:description}).then(() =>{
            navigate("/");
          })
          .catch((error) =>{
            console.log(error)
          }) 
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setSubmitLoading(true)
        updateBlog();
        setSubmitLoading(false);
    }
    useEffect(() =>{
        setUser(currentUser.email)
        const getDocDetails = async (e) =>{  
            await getDoc(docRef).then((response) => {
                setTitle(response.data().title);
                setDescription(response.data().description);
                setimageURL(response.data().image);
            })
          }
        getDocDetails();
    },[])


  return (
            <Grid container justifyContent="center" alignItems = "center" sx={{height:"89.5vh",backgroundColor:"#1c1c1e"}}>
                <Stack spacing = {3} marginTop={1} padding ={2}
                sx={{
                        width: 600,
                        borderRadius:"10px",
                        boxShadow:"0px -1px 15px 2px rgba(196,196,196,0.5)",
                        backgroundColor:"#ffffff"
                        }}>
                <Typography variant="h5" component="div" sx={{letterSpacing:"3px",textTransform:"uppercase",color:"#1c1c1e"}}>
                               Update Champion Blog
                </Typography>
                <TextField 
                    value={title}
                    label="title" 
                    variant="outlined" 
                    onChange = {handleTitle}
                    />
                <TextareaAutosize
                    value={description}
                    minRows={10}
                    aria-label="empty textarea"
                    placeholder="Description"
                    onChange = {handleDescription}
                    />
                <Stack direction="row" alignItems="center" justifyContent="space-between"> 
                     
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
                    Update
                </LoadingButton>
            </Stack>
            </Grid>
           
  )
}
