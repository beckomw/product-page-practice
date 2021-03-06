 
// //  const SignupForm = () => {
// //    // Pass the useFormik() hook initial form values and a submit function that will
// //    // be called when the form is submitted
// //    const formik = useFormik({
// //      initialValues: {
// //        email: '',
// //      },
// //      onSubmit: values => {
// //        alert(JSON.stringify(values, null, 2));
// //      },
// //    });
// //    return (
// //      <form onSubmit={formik.handleSubmit}>
      //  <label htmlFor="email">Email Address</label>
      //  <input
      //    id="email"
      //    name="email"
      //    type="email"
      //    onChange={formik.handleChange}
      //    value={formik.values.email}
      //  />
 
// //        <button type="submit">Submit</button>
// //      </form>
// //    );
// //  };





import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const App = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  
  
  
  
  
  
  
  
  
  
  return (


    <div>

    <form onSubmit={formik.handleSubmit}>

    <label htmlFor="City">City</label>
    <input
      id="city"
      name="city"
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.city}
    />

      <label htmlFor="PostType">Post Type</label>
      <input
        id="PostType"
        name="Post Type"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Post}
      />
      {formik.touched.PostType && formik.errors.PostType ? (
        <div style={{ color: "red" }}>{formik.errors.PostType}</div>
      ) : null}


        
      
      
      
    
      <label htmlFor="category">Category</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
   
        



      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div style={{ color: "red" }}>{formik.errors.lastName}</div>
      ) : null}





      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    
    
    
    <p></p>
    
    
    
    
    
    
    
      </form>


      </div>
  );
};


export default App; 



