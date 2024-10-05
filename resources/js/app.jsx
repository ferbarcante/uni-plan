
import React from 'react';
import { Route, BrowserRouter,Routes } from "react-router-dom";
import Login from "./pages/login";
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
          <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
    );