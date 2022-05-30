import React from "react";
import Home from "../src/pages/Home"
import Repositories from "../src/pages/Repositories"
import{
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export default function SetRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repositories" element={<Repositories />} />
            </Routes>
        </BrowserRouter>
    )
}