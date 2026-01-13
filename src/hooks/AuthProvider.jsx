//page used for login 
import React,{createContext, use, useContext, useState} from 'react'

//create a context that can be accessed throughout the project
// provided by react 1.import from react 

const AuthContext=createContext()
const AuthProvider = ({children}) => {
const[isLoggedIn,setisloggedIn]=useState(false)
const[user,setUser]=useState(null)
const login=(username)=>{
    setisloggedIn(true)
    setUser(username)
}
const logout=()=>{
    setisloggedIn(false)
    setUser(null)
}

  return (
    <AuthContext.Provider value={{isLoggedIn,user,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
//return custom hooks - use can be added as prefix , naming convension
export const useAuth=()=>{
    return useContext(AuthContext)
}
export default AuthProvider