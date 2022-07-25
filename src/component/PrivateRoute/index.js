import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  const navigateTo = () =>{
    if (!currentUser) {
      return <Navigate to='/login' />
    }
  }
  useEffect(() => {
    navigateTo();
  },[])

  return (
    <>
      {currentUser && children}
    </>
  )
}