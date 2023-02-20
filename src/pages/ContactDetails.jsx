import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Assets
import UserIcon from "../assets/user-icon.png";

const ContactDetails = () => {

     const { id } = useParams();

     const [contact, setContact] = useState()

     useEffect(() => {
          let isContact = JSON.parse(localStorage.getItem('contact'))
          if(isContact){
               for (let index = 0; index < isContact.length; index++) {
                    let element = isContact[index];
                    console.log(element);
                    if (element.id == id) {
                         console.log("found");
                         setContact(element)
                    }
               }
          }
     }, []);

     // console.log(contact);


     return (
          <div className="h-48 w-full my-10 ">
               <div className="">
                    <img className="w-36" src={UserIcon} alt="" />
               </div>
               <div className="p-5 rounded-2xl border w-full h-auto mt-10">
                    <table className="table-auto w-full text-left">
                         <thead>
                              <tr className="border-b">
                                   <th className="p-3">Contact Name</th>
                                   <th>Phone Number</th>
                                   <th>Email</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr className="border-b">
                                   <td className="p-3">{contact ? contact.firstName + " " + contact.lastName : "..."}</td>
                                   <td>{contact ? contact.phoneNumber : "..."}</td>
                                   <td>{contact ? contact.email : "..."}</td>
                              </tr>
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default ContactDetails;
