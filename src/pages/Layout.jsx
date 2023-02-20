import { Outlet } from "react-router-dom";
const Layout = () => {
     return ( 
          <div className="h-full w-[85%] px-20 py-8 border ml-2 lg:rounded-[40px] ">
               <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Home</h2>
               </div>
               <Outlet />
          </div>
      );
}
 
export default Layout;