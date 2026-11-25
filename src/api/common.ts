import { useMutation, useQuery } from "@tanstack/react-query"
import type { ILogin, IRegister } from "../types"
import apiInstance from "."


export const registerUser = () => {
    return useMutation({
        mutationFn: (data:IRegister) => apiInstance.post('auth/register',data),
        onSuccess:(response) => {
            console.log('ответ', response);
        }
    })
}

export const loginUser = () => {
    return useMutation({
        mutationFn: (data:ILogin) => apiInstance.post('auth/login',data),
        onSuccess:(response) => {
            if(response.data.access) {
                localStorage.access_token = response.data.access
                localStorage.refresh_token = response.data.refresh
            }
        }
    })
}

export const getUserData = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: () => apiInstance.get('auth/users/profile', {
            headers: {
               'Authorization':  `Bearer ${localStorage.access_token}`
            }
        }),
        select: (response) => response.data 
    })
}

interface IParams {
    searchValue: string;
    sortValue: string;
    limit: number;
    offset: number;
}

export const getProducts = ({ searchValue, sortValue, limit, offset } : IParams ) => {
    return useQuery({
        queryKey: ['products', searchValue, sortValue, offset],
        queryFn: () => {
            const params: any = {         
            }
            if(searchValue) {
                params.search = searchValue
            }
            if(sortValue) {
                params.ordering = sortValue
            }
            if(limit) {
                params.limit = limit
            }
            if(offset) {
                params.offset = offset
            }
            
          return  apiInstance.get('/products', { params })
        },
        select:(response) =>  response.data
    })
}