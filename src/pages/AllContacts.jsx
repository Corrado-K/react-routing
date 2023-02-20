import { useEffect, useState } from "react";
import ContactCard from "../components/contactCard/ContactCard";

const AllContacts = () => {

     const [contacts, setContacts] = useState([])

     useEffect(() => {
          let isContact = JSON.parse(localStorage.getItem('contact'))
          if(isContact){
               setContacts(isContact)
          }
     }, []);

     return ( 
          <div className="h-auto w-full grid grid-cols-4 gap-2 my-10">
               {
                    contacts.map((contact) => (
                         <ContactCard key={contact.id} contact={contact}/>
                    ))
               }
               {/* <ContactCard />
               <ContactCard />
               <ContactCard /> */}
          </div>
      );
}
 
export default AllContacts;