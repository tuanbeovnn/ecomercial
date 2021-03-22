import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';

const LoginGoogle = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [familyName, setFamilyName] = useState();
    const [accessToken, setAccessToken] = useState();
    const [userObjectData, setUserObjectData] = useState({});
    const dispatch = useDispatch(); 

    const responseGoogle = (response) => {
        console.log(response);
        setIsLogin(true); 
        setEmail(response.profileObj.email);
        setFirstName(response.profileObj.givenName);
        setFamilyName(response.profileObj.familyName)
        setAccessToken(response.accessToken);
        setUserObjectData(response)
    }

    if(isLogin) {
        return null
    } else {
        return (
            <div>
                 <GoogleLogin
    clientId="639050339114-svu41e4lfu6b641sev6k3nfb4sgtotl9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            </div>
        );
    }
    
}

export default LoginGoogle;
