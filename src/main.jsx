import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from "react-router-dom";
import {router} from "./routes/router.jsx";
// import {Provider} from "react-redux";
// import store from "../src/redux/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <>
          <RouterProvider router={router}/>
      </>
  </React.StrictMode>,
)
