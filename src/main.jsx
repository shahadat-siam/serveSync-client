import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes.jsx";
import AuthProvider from "./components/provider/AuthProvider.jsx";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> 
      {/* <QueryClientProvider client={queryClient}> */}
        <RouterProvider router={router} />
      {/* </QueryClientProvider> */}
    </AuthProvider>
    
  </React.StrictMode>
);
