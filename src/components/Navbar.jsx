import { Link } from "react-router-dom";

const Navbar = () => {
     return (
          <div className="w-screen h-20 flex p-10 bg-[#c5c5c5] items-center justify-between m-0">
               <h2 className="text-lg font-bold ml-10">Business ContactBook</h2>
               <div className="flex space-x-5 mr-10">
                    <Link to={"/"}>
                         <p className="hover:text-lg hover:text-sky-700 ease-in-out duration-300">Contacts</p>
                    </Link>
                    <Link to={"/settings"}>
                         <p className="hover:text-lg hover:text-sky-700 ease-in-out duration-300">New Contact</p>
                    </Link>
               </div>
          </div>
     );
};

export default Navbar;
