import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "./pages/Layout";
import AddContact from "./pages/AddContact";
import AllContacts from "./pages/AllContacts";
import ContactDetails from "./pages/ContactDetails";
import Login from "./pages/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Callback from "./pages/Callback";


function App() {
     const routes = useRoutes([
          {
               path: "/",
               element: <Layout />,
               children: [
                    {
                         path: "",
                         element: <Home />
                    },
                    {
                         path: "allcontacts",
                         element: <AllContacts />,
                    },
                    {
                         path: "allcontacts/:id",
                         element: <ContactDetails />,
                    },
                    {
                         path: "/addcontact",
                         element: <AddContact />,
                    },
               ],
          },
          {
               path: "/login",
               element: <Login />,
          },
          {
               path: "/callback",
               element: <Callback />,
          },
          {
               path: "/*",
               // element: <Home />
               // check
          }
     ]);

     const { isLoading } = useAuth0()
     if(isLoading) {
          return (
               <div>
                    Loading...
               </div>
          )
     }

     return (
          <div>
               { routes }
          </div>
               
     );
}

export default App;
