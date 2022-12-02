
export function useAuthenticated(){
    const token= window.localStorage.getItem('token');
   
    const auth = {
        isAuthenticated: token=='null'?false:true,
        logout:()=>{
            window.localStorage.clear();
        }
    }

    return auth;
}