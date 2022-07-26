import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import {doc,getDoc,deleteDoc, updateDoc} from 'firebase/firestore'
import {Card,Typography,CardContent,Stack,CardMedia,Button,Grid,Box} from '@mui/material'
import { useParams,useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function DetailBlog(){
    const {id} = useParams();
    const [blog,setBlog] = useState();
    const docRef = doc(db, "Blogs", `${id}`);
    const navigate = useNavigate();
    const {currentUser} = useAuth();

    const delDoc = async () => {
      await deleteDoc(docRef).then(() => {
          navigate("/");
        })
    }    

    const handleDelete = async (e) =>{  
      await getDoc(docRef).then((response) => {
        if(response.data().user === currentUser.email){
          delDoc();
        }
      })
    }
    const handleUpdate = () =>{
      navigate(`/blogs/detailblog/${id}/update`);
    }

    useEffect(() =>{
        const getBlog = async() =>{
          const docSnap = await getDoc(docRef);
          setBlog(docSnap.data());
        }
         getBlog();
    },[])

    return (
      <>
      {blog && 
      <Box>
         {(currentUser.email === blog.user) && 
        <Stack  direction="row" justifyContent="flex-end" spacing ={1} margin={1}>
          <Button 
            variant = "contained"
            onClick={handleUpdate}
            >
            Update Blog
          </Button>
          <Button 
            variant = "contained"
            onClick={handleDelete}
            sx={{backgroundColor:"#ff3a30"}}
            >
            Delete Blog
          </Button>
        </Stack>
        }
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
                                    left: "50%",
                                    transform: "translate(-50%, 190%)",
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
      </Box>
      }
      </>
  )
}
