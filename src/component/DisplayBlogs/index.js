import React, { useEffect, useState,useCallback} from 'react'
import { db } from '../../firebase'
import {collection,getDocs} from 'firebase/firestore'
import {Card,Typography,CardContent,Stack,CardMedia} from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function DisplayBlogs() {
    const [blogs,setBlogs] = useState();
    const blogReference = collection(db,"Blogs")
    const navigate = useNavigate();
    
    useEffect(() =>{
        const getBlogs = async () => {   
            const data = await getDocs(blogReference);
            setBlogs(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
        }
        getBlogs();  
    },[])
    
    return (
    <Stack direction="row"  sx={{flexWrap:"wrap"}}>
    {blogs && blogs.map((blog) => {
        return(
                    <Card 
                        sx={{ width: 425,
                            margin:"10px",
                            borderRadius:"10px",
                            boxShadow:"0px -1px 15px 2px rgba(196,196,196,1)",
                            backgroundColor:'#2c2c2e',
                            color:"#ffffff"
                            }}
                    
                    >
                        <CardMedia
                            onClick={() => navigate(`/blogs/detailblog/${blog.id}`)}
                            component="img"
                            image={blog.image}
                            alt="Image "
                            height="200px"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{letterSpacing:"2px"}}>
                                {blog.title}
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div" sx={{letterSpacing:"1px"}}>
                                Author : {blog.user}
                            </Typography>
                        </CardContent>
                    </Card>     
        )
    })}
    </Stack>
  )
}
