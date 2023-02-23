import { Link, Outlet } from "react-router-dom";
import Container from "../components/Container";
import { SignUpButton } from "../components/auth_buttons/SignUpButton";
import { LoginButton } from "../components/auth_buttons/LoginButton";
import { AuthButtons } from "../components/auth_buttons/AuthButtons";

const Layout = () => {
     return ( 
          <Container>
               <div className="h-full w-[85%] px-20 py-8 border ml-2 lg:rounded-[40px] ">
                    <div className="flex justify-between items-center">
                         <h2 className="text-lg font-semibold">Home</h2>
                         <AuthButtons />
                         
                    </div>
                    <Outlet />
               </div>
          </Container>
          
      );
}
 
export default Layout;