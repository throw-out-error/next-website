import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <Link to="/home">
                <img
                    className="logo"
                    src="/logo-transparent.png"
                    alt="throw out Error()"
                />
            </Link>
        </header>
    );
}
