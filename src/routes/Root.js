import React from "react";
import { Outlet,Link } from "react-router-dom";
import './root.css';
export default function Root() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/nopage">No Page</Link>
                <Link to="/locationdisplay">Location Display</Link>
                </nav>
            <Outlet />
            </div>
    );
}
