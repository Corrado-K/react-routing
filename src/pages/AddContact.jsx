import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
     const navigate = useNavigate();

     // create form with formik
     const formik = useFormik({
          initialValues: {
               id:Math.floor(Math.random() * 1001),
               firstName: '',
               lastName: '',
               phoneNumber: '',
               email: ''
          },
          onSubmit: values => {
               alert(JSON.stringify(values, null, 2))
               const existingContacts = JSON.parse(localStorage.getItem('contact')) || [] //check if the contact array exists in local host and get it, otherwise use a new array
               const newContacts = [...existingContacts, values] // add the object value for the contacts to the array
               localStorage.setItem('contact', JSON.stringify(newContacts)) // store the updated array in local storage
               navigate("/allContacts");
          }
     })


     return ( 
          <div className="h-auto my-10">
               <form className="space-y-5" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-2 space-x-2">
                         <input
                              id="firstName"
                              name="firstName"
                              type="text"
                              placeholder="First Name"
                              onChange={formik.handleChange}
                              value={formik.values.firstName}
                              className="p-4 border-2 focus:ring-blue-400 rounded-lg"
                         />    
                    
                         <input
                              id="lastName"
                              name="lastName"
                              type="text"
                              placeholder="Last Name"
                              onChange={formik.handleChange}
                              value={formik.values.lastName}
                              className="p-4 border-2 rounded-lg"
                         />
                    </div>

                    <div>                    
                         <input
                              id="phoneNumber"
                              name="phoneNumber"
                              type="tel"
                              placeholder="Phone Number"
                              onChange={formik.handleChange}
                              value={formik.values.phoneNumber}
                              className="p-4 w-full border-2 rounded-lg"
                         />
                    </div>

                    <div>                                   
                         <input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Email"
                              onChange={formik.handleChange}
                              value={formik.values.email}
                              className="p-4 w-full border-2 rounded-lg"
                         />
                    </div>

                    <div className="">
                         <button className="px-5 py-3 bg-[#061922] hover:bg-[#134a63] text-white rounded-lg" type="submit">Submit</button>
                    </div>
               </form>
          </div>
      );
}
 
export default AddContact;