import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Contacts() {
    return (
        <>
            <h1>Contacts page!</h1>
            <Outlet />
        </>

    )
}
