import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate  = useNavigate();
  useEffect(() => {
    const userJWT = localStorage.getItem('userJWT')
    if(!userJWT){
      navigate('/login');
    }
  },[])

  return (
    <div>Home</div> 
  )
}

export default Home