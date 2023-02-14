import { Link, Outlet } from "react-router-dom";

const Home = () => {
     return ( 
          <div className="h-full px-20 py-10">
               <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Home</h2>
                    <Link to={'/dashboard'}>
                         <button className="p-2 bg-sky-700 text-white rounded-md">Dashboard</button>
                    </Link>     
               </div>
               <Outlet />
          </div>
      );
}
 
export default Home;