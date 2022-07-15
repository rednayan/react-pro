import {useEffect,useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { makeRequest } from '../../service/yuri'

const Blogs = () => {
    const navigate  = useNavigate();
    const [names,setNames] = useState([]);


    const fetchData = () => {makeRequest().then((response) => {
        response.map((data) => {
          data.map((name) => {
            setNames((prev) => [prev,name.name])
          })
        })
    });
    }

    useEffect(() => {
        const userJWT = localStorage.getItem('userJWT')
        if(!userJWT){
        navigate('/login');
        }
        fetchData();    
  },[])


    return(
        <div>
            {names.map((name) => {return names })}
        </div>
    )
}

export default Blogs
