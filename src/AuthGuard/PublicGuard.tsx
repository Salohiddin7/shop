import  { useEffect, type FC } from 'react'
import { Outlet, useNavigate } from "react-router-dom"

const PublicGuard:FC = () => {
    
    let access_token = localStorage.access_token
    const navigate = useNavigate()
    
    useEffect(() => {
        if(access_token) {
            navigate('/')
        }
    }, [])
    
  return <Outlet/>
}

export default PublicGuard