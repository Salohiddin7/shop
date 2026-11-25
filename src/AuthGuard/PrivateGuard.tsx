import  { useEffect, type FC } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { getUserData } from "../api/common"
import { useUser } from "../store/useUser"

const PrivateGuard:FC = () => {
    
    let access_token = localStorage.access_token
    const navigate = useNavigate()
    
    const { setUser } = useUser()
    const { data } = getUserData()
    
    
    useEffect(() => {
        if(data) {
            setUser(data)
        }
    }, [data])
    
    useEffect(() => {
        if(!access_token) {
            navigate('/login')
        }
    }, [])
    
  return <Outlet/>
}

export default PrivateGuard