import {useEffect,useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../../service/yuri'
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
        <div>
         {post.map((data) => <li>{data.name} , {data.country} , {data.domains.map((domains)=> {return domains})}</li>)}
        </div>
    )
}

export default Blogs
