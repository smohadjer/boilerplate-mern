import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import './layout.css';

export default function Layout() {
  return (
    <>
        <nav>
            <ul>
                <li><NavLink style={
                    ({isActive}) => { return isActive ? { color: "red" } : {} }
                } to="/">Home</NavLink></li>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
                <li><Link to="/contacts/saeid">Contact subpage (nested route)</Link></li>
                <li><Link to="/contacts/123">Contact with id</Link></li>
            </ul>
        </nav>
        <Outlet />
    </>
  )
}
