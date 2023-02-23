import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { Auth0Provider } from "@auth0/auth0-react";
import { Auth0ProviderWithNavigate } from "./auth/auth0-provider-with-navigate";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
        <App />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);
