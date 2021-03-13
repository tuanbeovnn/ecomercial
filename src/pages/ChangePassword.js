
import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { changePasswordRequest } from '../redux/actions';

const ChangePassword = (props) => {
    const user = useSelector(state => state.Ecomercial.user); 
    const [values, setValues] = useState({
        newPassword: '', 
        oldPassword: ''
    });
    const [errors, setErrors] = useState({
        newPassword: '', 
        oldPassword: ''
    });
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(true)
    const handleChange  = (e) => {
    let {value, name} = e.target; 
    if (value.trim() === "") {
        setErrors({
            ...errors, 
            [name] : name + " is invalid"
        })
    } else {
        setErrors({
            ...errors, 
            [name] : ""
        })
    }
    if(value.trim().length < 6) {
        setErrors({
            ...errors, 
            [name] : name + " length must be greater than 6"
        })
    } else {
        setErrors({
            ...errors, 
            [name] : ""
        })
    }
        setValues({
            ...values, 
            [name] : value
        });
   
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        let valid = true; 
        for (let key in values) {
            if(values[key] === "") {
                valid = false; 
            }
        }
        for (let key in errors) {
            if(errors[key] !== "") {
                valid = false; 
            }
        }
        let changePasswordObj = {           
                "newPassword": values.newPassword,
                "oldPassword": values.oldPassword           
        }
        if(!valid) {
            return; 
        } else {
            // props.changePasswordRequest(changePasswordObj, (data)=>{
            //     if (!data) {
            //         setError ( true)
            //     }else {
            //         setSuccess (true)
            //     }
                 
            //  })
            props.changePasswordRequest(changePasswordObj);
        }
       
    }
    console.log(user)
    console.log(typeof user)
if(user && user !== "" && user !== null && user !== undefined) {
    return (
  
        <div>
          
                    <div className="container">
                        <div className="row">
                            {/* Register */}
                            <div className="col-md-6 col-12 d-flex">
                                <div className="ee-register">
                                    <h3>Change Password</h3>
                                    {/* Register Form */}
                                    <form action="#" onSubmit = {handleSubmit}>
                                        <div className="row">
                                            <div className="col-12 mb-30"><input type="passWord" 
                                            name = "newPassword" 
                                            placeholder="New Password" 
                                            onChange = {handleChange}
                                            /></div>
                                            <span className = "text-danger">{errors.newPassword}</span>
                                            <div className="col-12 mb-30"><input type="passWord" 
                                            name = "oldPassword" 
                                            placeholder="Old Password" 
                                            onChange = {handleChange}/></div>
                                                <span className = "text-danger">{errors.oldPassword}</span>
                                            <div className="col-12"><input type="submit" /></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-1 col-12 d-flex">
                                <div className="login-reg-vertical-boder" />
                            </div>
                         
                           
                        </div>
                    </div>
                </div>
     
 
    )
} else {
    alert("Please Login First!"); 
    return <Redirect to="/login" />
}
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changePasswordRequest: (body) => {
            dispatch(changePasswordRequest(body));
        },
       
    }
}
export default connect(null, mapDispatchToProps)(ChangePassword);

