import { useEffect, useState } from "react";

export function useAuthenticated(){

    const [token, setToken] = useState()

    useEffect(() => { 
        const _token: string = window.localStorage.getItem('token') as string;
        //@ts-ignore
        setToken(_token)
    }, [])
   
    const auth = {
        isAuthenticated: token=='null'?false:true,
        logout:()=>{
            window.localStorage.clear();
        }
    }

    return auth;
}