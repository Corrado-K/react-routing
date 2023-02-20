import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Layout from "./pages/Layout";
import AddContact from "./pages/AddContact";
import AllContacts from "./pages/AllContacts";
import ContactDetails from "./pages/ContactDetails";


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
               ],
          },
          {
               path: "/addcontact",
               element: <AddContact />,
          },
          {
               path: "/*",
               // element: <Home />
          }
     ]);
     return (
          <div className="w-full h-screen m-0 flex lg:p-2">
               {/* <Navbar /> */}
               <Sidebar />
               { routes }
          </div>
     );
}

export default App;
