import React from 'react';
 import { withFormik } from 'formik';
 import * as Yup from "yup";
 const MyForm = props => {
   const {
     values,
     touched,
     errors,
     handleChange,
     handleBlur,
     handleSubmit,
   } = props;
   return (
 
                 <form onSubmit={handleSubmit}>
                     <div className="row">
                                        <div className="col-12 mb-30"><input type="text" 
                                            name = "address" 
                                            onChange = {handleChange}
                                            placeholder="address" 
                                            value = {values.address}
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

                                       
                                        </div>
                                        <button type="submit">Submit</button>
     </form>

          
                    
   );
 };
 
 const MyEnhancedForm = withFormik({
   mapPropsToValues: () => ({
    address:'',
    name: '',
    email: '',
    password: '',
    phone: '',
    username: ''
}),
 
   // Custom sync validation
//    validationSchema: Yup.object({
//     address: Yup.string().required("Required"),
//     name: Yup.string().required("Required"),
//     email: Yup.string().email("Invalid email format").required("Required"),
//     password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required("Required"),
//     phone: Yup.number().required("Required"),
//     username: Yup.string().required("Required")
// }),
 
   handleSubmit: (values, { setSubmitting }) => {
    console.log(values)
   },
 

 })(MyForm)
 export default (MyEnhancedForm);