import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Contacts from "./pages/contacts";
import Contact from "./pages/contact";
import Test from "./pages/test";
export default function App() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/contacts/saeid">Saeid</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacts">
                    <Route index={true} element={<Contacts />}></Route>
                    <Route path="saeid" element={<Contact />}></Route>
                    <Route path=":id" element={<Test />}></Route>
                </Route>
            </Routes>
        </>
    );
}
