import React, { useState } from 'react'; 
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
export default function LoginFacebook(props) {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [userID, setUserID] = useState();
    const [accessToken, setAccessToken] = useState();
    const [userObjectData, setUserObjectData] = useState({});
    const dispatch = useDispatch()
    const componentClicked = () => {

    }
    const responseFacebook = (response) => {
        if(response && response.accessToken) {
            setIsLogin(true); 
            setEmail(response.email);
            setUserID(response.userID);
            setName(response.name);
            setAccessToken(response.accessToken);
            setUserObjectData(response)
        }
       
    }

if(isLogin) {
    localStorage.setItem("loginFB", JSON.stringify(userObjectData)); 
    
    props.loginRequest(accessToken)
    return <div style = {{
        width: "400px",
        margin:"auto", 
        background:"#f4f4f4", 
        padding:"20px"
    }}>
        <h3>Welcomed {name} ! Your account is login already !!! </h3>
        <p>Email: {email}</p>
        <p>User ID: {userID}</p>
    </div>

} else {
    return ( <div>
             <FacebookLogin
    appId="469331144244895"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} 
    
    />,
        </div>
    )
}

}
