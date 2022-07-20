import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import {collection,getDocs} from 'firebase/firestore'
import {Card,Typography,CardContent,Stack} from '@mui/material'

export default function DisplayBlogs() {
    const [blogs,setBlogs] = useState();
    const blogReference = collection(db,"Blogs")

    useEffect(() =>{
        const getBlogs = async () => {   
            const data = await getDocs(blogReference);
            setBlogs(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
        }
        getBlogs();
    },[])

    return (
    <Stack direction="row" justifyContent="space-between" sx={{flexWrap:"wrap"}}>
    {blogs && blogs.map((blog) => {
        return(
                <Card sx={{ width: 800, marginBottom:5  }}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                </Typography>
                {blog.image && 
                            <img height="400px" width="800px" src = {blog.image}/>
                    }
                <Typography>
                    {blog.description}
                </Typography>
                </CardContent>
                </Card>      
        )
    })}
    </Stack>
  )
}
