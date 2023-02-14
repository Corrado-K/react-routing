import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";

// import routes from "./routes/routes"

function App() {
     const routes = useRoutes([
          {
               path: "/",
               element: <Home />,
               children: [
                    {
                         path: "dashboard",
                         element: <Dashboard />,
                    },
               ],
          },
          {
               path: "/settings",
               element: <Settings />,
          },
     ]);
     return (
          <div className="w-screen m-0">
               <Navbar />
               { routes }
          </div>
     );
}

export default App;
