import { useState,useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/auth-context';

import classes from './Login.module.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const emailInputRef= useRef();
  const passwordInputRef= useRef();
  const authCtx= useContext(AuthContext);
  const navigate= useNavigate();


  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onSubmitHandler=(e)=>{
    e.preventDefault();
    let enteredEmail=  emailInputRef.current.value;
    let enteredPassword= passwordInputRef.current.value;
    setLoading(true);
    navigate('/')

    let url;
    if(isLogin){
      url= 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtylR8EPdVEEDUFY1w-nmhwvngyqI67ec';
    }
      else{
        url= 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtylR8EPdVEEDUFY1w-nmhwvngyqI67ec';
      }
      fetch(url ,{
        method:'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers: {
          'content-type' : 'application/json'
        }
      }).then(res =>{
        setLoading(false);
        if(res.ok){
          return res.json().then(data=>{
            authCtx.login(data.idToken);
            navigate('/');
            console.log(data.idToken)
          })
        } else{
              return res.json().then(data=>{
              if(data && data.error.message){
                alert("Authentication not successful- " + data.error.message)
              } else{
                alert("Some error occured!! Please try again..")
              }    
          })
        }
      })

    emailInputRef.current.value="";
    passwordInputRef.current.value="";
  }

return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password' id='password' ref={passwordInputRef} required />
        </div>
        <div className={classes.actions}>
          {!loading && <button type='submit' className={classes.loginBtn} onClick={onSubmitHandler}> 
          {isLogin ? "Log In" : "Create Account"} </button>} 

            {loading && <h2>Submitting Data...</h2>}

           {!loading && <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>           
          {isLogin ? 'Create new account' : 'Login with existing account'}</button>}
        </div>
      </form>
    </section>
  );
};

export default Login;