import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Convert from "./components/convert.js";
import Redirect from "./components/redirect.js";

function App() {
    return (
        <div>
            <h1>KISS: Keep It Short &amp; Simple!</h1>

            <div>
            <Routes>
            <Route 
                path="/" 
                element={<Convert />}
            />
            <Route 
                path=":code" 
                element={<Redirect />}
            />
            </Routes>
            </div>
        </div>
    );
}

export default App;
