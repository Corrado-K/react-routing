import Sidebar from "./Sidebar";

const Container = ({children}) => {
     return ( 
          <div className="w-full h-screen m-0 flex lg:p-2">
               <Sidebar />
               { children }
          </div>
      );
}
 
export default Container;