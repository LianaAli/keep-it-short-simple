import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Convert from "./components/convert.js";
import Redirect from "./components/redirect.js";
import KissLogo from "./kiss-logo.png";

function App() {
    return (
        <div className="text-center">
            <header className="sticky-top m-5">
                <a href="/">
                    <img src={KissLogo} alt="kiss" className="img-fluid" />
                </a>
            </header>

            <div className="m-5">
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

            <footer className="fixed-bottom m-2">
                Developed by <a href="https://github.com/LianaAli" target="_blank" rel="noreferrer">Liana Ali</a> 2021
            </footer>
        </div>
    );
}

export default App;
