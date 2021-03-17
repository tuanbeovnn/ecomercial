import React, { useState } from 'react'; 
import FacebookLogin from 'react-facebook-login';
import { connect, useDispatch } from 'react-redux';
import {loginFacebookRequest} from '../redux/actions'
 function LoginFacebook(props) {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [userID, setUserID] = useState();
    const [accessToken, setAccessToken] = useState();
    const [userObjectData, setUserObjectData] = useState({});
    const [error, setError] = useState(false); 
    const [success, setSuccess] = useState(false); 
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
            setUserObjectData(response);
            
        }
       
    }

if(isLogin) {
    console.log("accessToken",accessToken)
    props.userLoginFacebook({accessToken: accessToken}, (data)=>{
        if (!data) {
          setError (true )
        }else {
            setSuccess ( true)
        }
         
     })
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
const mapDispatchToProps = (dispatch, props) => {
    return {
        userLoginFacebook: (body, callback) => {
            dispatch(loginFacebookRequest(body, callback));
        },
    }
}

export default connect(null, mapDispatchToProps)(LoginFacebook)