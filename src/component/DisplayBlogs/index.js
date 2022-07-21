import React, { useEffect, useState,useCallback} from 'react'
import { db } from '../../firebase'
import {collection,getDocs} from 'firebase/firestore'
import {Card,Typography,CardContent,Stack} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function DisplayBlogs() {
    const [blogs,setBlogs] = useState();
    const blogReference = collection(db,"Blogs")
    const navigate = useNavigate();

    const getBlogs = async () => {   
        const data = await getDocs(blogReference);
        setBlogs(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
    }
    getBlogs();

    useEffect(() =>{
        
    },[])


    return (
    <Stack direction="row" spacing = {1} sx={{flexWrap:"wrap"}}>
    {blogs && blogs.map((blog) => {
        return(
                <Card sx={{ width: 200}}>
                <CardContent onClick={() => navigate(`/blogs/detailblog/${blog.id}`)}>
                {blog.image && 
                            <img  height="100px" width="150px" src = {blog.image}/>
                    }
                <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                    {blog.user}
                </Typography>
                </CardContent>
                </Card>      
        )
    })}
    </Stack>
  )
}
