import {useEffect,useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../../service/yuri'
import {Card,CardContent,Typography,Stack} from "@mui/material"
import axios from 'axios';

const Blogs = () => {
    const navigate  = useNavigate();
    const [post,setPost] = useState([]);
  
    const getPosts = () => {
        makeRequest().then((resp)=> {
          setPost(resp.data)
      })
    };

    useEffect(() => {
        const userJWT = localStorage.getItem('userJWT')
        if(!userJWT) navigate('/login');
        getPosts();
        },[])

    return(
        <Stack direction="row" justifyContent="space-between" sx={{flexWrap:"wrap"}}>
         {post.map((data) => 
            <Card sx={{ width: 200, marginBottom:5 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography>
                {data.country}
              </Typography>
              <Typography>
                  {data.domains.map((domains)=> {return <div>{domains}</div>})}
              </Typography>
            </CardContent>
          </Card>
         )}
        </Stack>
    )
}

export default Blogs
