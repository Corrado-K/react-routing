import { HomeIcon, PhoneIcon, UserPlusIcon, UsersIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Sidebar = () => {
     return ( 
          <div className="lg:w-[20%] lg:h-full lg:rounded-[40px] bg-[#061922] lg:py-12 lg:px-12 text-white">
               {/* Title */}
               <div className="flex space-x-3">
                    <PhoneIcon className='w-5' />
                    <h2 className="font-medium text-xl">Phonebook</h2>
               </div>

               <div className="mt-20 text-[#ffffffa4]">
                    <Link to={'/'}>
                         <p className='flex items-center hover:text-white mt-8 mb-8'><HomeIcon className='w-5 mr-3'/>Home</p>
                    </Link>   
                    <Link to={'/addcontact'}>
                         <p className='flex items-center hover:text-white mt-8 mb-8'><UserPlusIcon className='w-5 mr-3'/> Add Contacts</p>
                    </Link>   
                    <Link to={'/allcontacts'}>
                         <p className='flex items-center hover:text-white mt-8 mb-8'><UsersIcon className='w-5 mr-3'/> All contacts</p>
                    </Link>   
               </div>
          </div>
      );
}
 
export default Sidebar;