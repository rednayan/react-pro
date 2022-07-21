import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import {doc,getDoc} from 'firebase/firestore'
import {Card,Typography,CardContent,Stack} from '@mui/material'
import { useParams } from 'react-router-dom'

export default function DetailBlog(){
    const {id} = useParams();
    const [blog,setBlog] = useState();
    const docRef = doc(db, "Blogs", `${id}`);

    useEffect(() =>{
        const getBlog = async() =>{
          const docSnap = await getDoc(docRef);
          setBlog(docSnap.data());
        }
         getBlog(); 
    },[])


    return (
    <Stack direction="row" spacing = {1} sx={{flexWrap:"wrap"}}>
      {blog && 
                <Card sx={{ width: 1200}}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      {blog.title}
                  </Typography>
                  <Typography gutterBottom variant="h7" component="div">
                      {blog.user}
                  </Typography>
                  {blog.image && 
                              <img width = "100%" src = {blog.image}/>
                      }
                  <Typography>
                      {blog.description}
                  </Typography>
                </CardContent>
                </Card> 
    }        
    </Stack>
  )
}
