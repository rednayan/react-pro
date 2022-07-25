import React, { useEffect } from 'react'
import { Navigate,useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() =>{
    const navigateTo = () =>{
      if (!currentUser) {
        navigate("/login");
      }
    }
    navigateTo();
  })
  
  return (
    <>
      {currentUser && children}
    </>
  )
}