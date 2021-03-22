import React, { useState } from 'react';
import { useSelector, connect } from 'react-redux';
import { withFormik } from 'formik';
import * as Yup from 'yup'; 
import { userRegisterRequest } from '../redux/actions';

class Thumb extends React.Component {
    state = {
      loading: false,
      thumb: undefined,
    };
  
    componentWillReceiveProps(nextProps) {
      if (!nextProps.file) { return; }
  
      this.setState({ loading: true }, () => {
        let reader = new FileReader();
  
        reader.onloadend = () => {
           
          this.setState({ loading: false, thumb: reader.result });
        };
  
        reader.readAsDataURL(nextProps.file);
      });
    }
  
    render() {
      const { file } = this.props;
      const { loading, thumb } = this.state;
  
      if (!file) { return null; }
  
      if (loading) { return <p>loading...</p>; }
  
      return (<img src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={150}
        width={180} />);
    }
  }


function Regiter (props){
    // const [filesAvatar, setFilesAvatar] = useState('');
 
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
      } = props;
    const onChangeFile = (e) => {
    let target = e.target; 
    let {name, value} = target; 
    let files = target.files[0]; ;
    // setFilesAvatar(files); 
    // if (FileReader && files) {
    //     const fr = new FileReader();
    //     fr.onload = () => {
    //         setFieldValue("avatar", e.currentTarget.files[0]); 
    //     }
    //     fr.readAsDataURL(files); 
    // }
    }

    return (

           <div className="container">
                        <div className="row">
                            {/* Register */}
                            <div className="col-md-6 col-12 d-flex">
                                <div className="ee-register">
                                    <h3>Register Form</h3>
                                    {/* Register Form */}
                                    <form  className="form-group" onSubmit = {handleSubmit}>
                                        <div className="row">
                                        <div className="col-12 mb-30"><input type="text" 
                                            name = "address" 
                                            onChange = {handleChange}
                                            placeholder="address" 
                                            value = {values.address}
                                            /></div>
                                        <span className = "text-danger">{errors.address}</span>
                                        <div className="col-12 mb-30"><input type="password" 
                                            name = "password" 
                                            onChange = {handleChange}
                                            placeholder="password" 
                                            value = {values.password}
                                            /></div>
                                        <span className = "text-danger">{errors.address}</span>
                                         <div className="col-12 mb-30"><input type="email" 
                                            name = "email" 
                                            placeholder="Email"
                                            onChange = {handleChange} 
                                            value = {values.email}
                                            /></div>
                                         <span className = "text-danger">{errors.email}</span>

                                         <div className="col-12 mb-30"><input type="text" 
                                            name = "name" 
                                            onChange = {handleChange}
                                            placeholder="Name" 
                                            value = {values.name}
                                         /></div>
                                         <span className = "text-danger">{errors.name}</span>

                                        <div className="col-12 mb-30"><input type="number" 
                                            name = "phone" 
                                            placeholder="phone" 
                                            onChange = {handleChange}
                                            value = {values.phone}
                                        /></div>
                                        <span className = "text-danger">{errors.phone}</span>
                                        
                                        <div className="col-12 mb-30"><input type="text" 
                                            name = "username" 
                                            placeholder="username" 
                                            onChange = {handleChange}
                                            value = {values.username}
                                        /></div>
                                        <span className = "text-danger">{errors.username}</span>

                                        <div className="col-12 mb-30">
                                         {/* <input type="file"  
                                         name = "avatar" 
                                            onChange = {(e) => {
                                                setFieldValue("avatar", e.target.files[0])
                                                console.log(e.target.files[0])
                                            }}
                                            value = {values.avatar}
                                            
                                            /> */}
                                         <input id="file" name="avatar" type="file" onChange={(event) => {
                    setFieldValue("avatar", event.currentTarget.files[0]);
                  }} className="form-control" />
                  <Thumb file={values.avatar} />
                                            
                                        </div>
                                        <span className = "text-danger">{errors.username}</span>
                                        </div>

                                        <button type="submit">Submit</button>
                                    </form>

                                </div>
                            </div>   
                        </div>
                    </div>

     
 
    );
}
const registerForm = withFormik({

    mapPropsToValues: (props) => {  
        return {
            address:'',
            name: '',
            email: '',
            password: '',
            phone: '',
            username: '', 
            avatar: null, 
    
        }
    },
    validationSchema: Yup.object({
        address: Yup.string().required("Required"),
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required("Required"),
        phone: Yup.number().required("Required"),
        username: Yup.string().required("Required"),
        avatar : Yup.mixed()

    }),
    handleSubmit: (values, { props, setSubmitting }) => {
   
      let registerData = {
        address: values.address,
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        username: values.username, 
        avatar: values.avatar,
        createdDate: new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString(),
        verifyAccount: 0, 

      }
    //   props.dispatch(userRegisterRequest(registerData))

    console.log(registerData); 
      
    },
  
})(Regiter);


export default connect(null,null)(registerForm);


