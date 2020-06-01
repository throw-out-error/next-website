import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <Link to="/home" className="logo-wrapper">
                <img className="logo" src="/logo-transparent.png" alt="throw out error()"></img>
            </Link>
            <ul className="header-nav">
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                {" "}
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </header>
    );
}
