
import React from 'react'
import { useUser } from '../../contexts/UserContext'
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
  const {user, isLoading} = useUser();

  if(isLoading) {
    return <h1>Loading user...</h1>
  }

  if(!isLoading && !user){
    return <Navigate to="/login"/>
  }
  return children;
}
