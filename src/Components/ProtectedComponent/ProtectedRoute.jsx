import {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'

const ProtectedRoute = ({children,msg, redirect}) => {
    const [{user}] = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate('/auth', {state:{msg, redirect}})
        }
    }, [user]);
  return children;
}

export default ProtectedRoute
