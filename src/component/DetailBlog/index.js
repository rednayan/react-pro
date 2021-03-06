import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import {doc,getDoc} from 'firebase/firestore'
import {Card,Typography,CardContent,Stack,CardMedia,Box} from '@mui/material'
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
      <Box>
      {blog && 
      <Stack alignItems = "center" justifyContent = "center" sx={{backgroundImage:`url(${blog.image})`,backgroundRepeat:"no-repeat",backgroundSize:"100%"}}>
                  <Card 
                  sx={{ width: "80%",
                      boxShadow:"0px -1px 15px 2px rgba(196,196,196,1)",
                      backgroundColor:'#2c2c2e',
                      color:"#ffffff",
                      margin:"30px 0px 30px"
                      }}
              
              >
                  <CardMedia
                      component="img"
                      image={blog.image}
                      alt="Image "
                      height="550px"
                      sx={{objectPosition:"0px 5%"}}
                  />
                  </Card>
                  <CardContent sx={{position: "absolute",
                                    top: "94%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color:"#ffffff",
                                  }}>
                  <Typography variant="h2" component="div" sx={{textTransform:"uppercase",letterSpacing:"10px"}}>
                          {blog.title}
                      </Typography>
                  </CardContent>
                  <Card 
                  sx={{ width: "80%",
                      boxShadow:"0px",
                      background: "rgba(0, 0, 0, 0)",
                      color:"#ffffff",
                      }}
                      >
                  <Stack direction= "row" justifyContent="space-around">
                  <CardContent sx={{display:"flex" , alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
                      <Typography variant="h7" component="div" sx={{letterSpacing:"1px"}}>
                          Author : {blog.user}
                      </Typography>
                  </CardContent>
                  <CardContent sx={{width:"600px"}}>
                  <Typography variant="p" component="div" sx={{letterSpacing:"1px"}}>
                          {blog.description}
                    </Typography>
                  </CardContent>
                  </Stack>
                </Card>    
        </Stack>
      }
      </Box>
  )
}
