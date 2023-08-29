import React,{useState, createContext} from 'react'


const AuthContext = createContext({
    token : "",
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
});

export const AuthContextProvider =(props)=>{
    const [token, setToken]= useState(localStorage.getItem('token'));

    let userIsLoggedIn= !!token; 

    const loginHandler =(token)=>{
        localStorage.setItem('token', token);
        setToken(token)
    }
    const logoutHandler=()=>{
        setToken(null); 
        localStorage.removeItem('token')
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;