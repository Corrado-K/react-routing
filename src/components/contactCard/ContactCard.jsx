import { Link } from 'react-router-dom';
import UserIcon from '../../assets/user-icon.png'

const ContactCard = ({contact}) => {
     return ( 
          <Link to={'/allcontacts/'+contact.id}>
               <div className="p-3 h-32 space-x-5 flex rounded-lg border">
                    {/* Image Icon on the left */}
                    <div className="w-2/5 p-2 my-auto items-center">
                         <img src={UserIcon} alt="" />
                    </div>
                    {/* Names - together, phone number underneath etc */}
                    <div className="w-3/5 mt-0 space-y-4 text-sm">
                         <p>{contact ? (contact.firstName.length < 20 ? contact.firstName : '...'): '...'} { contact ?  (contact.lastName.length < 20 ? contact.lastName : '...') : '...'}</p>
                         <p>{contact ? contact.phoneNumber : '...'}</p>
                         <p>{contact ? (contact.email.length < 20 ? contact.email : '...'): '...'}</p>
                    </div>
               </div>
          </Link>
      );
}
 
export default ContactCard;