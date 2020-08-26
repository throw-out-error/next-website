import React from "react";
import Link from "next/link";

export const Header = () => (
    <header>
        <Link href="/home">
            <a className="logo-wrapper">
                <img
                    className="logo"
                    src="/images/logo-transparent.png"
                    alt="throw out error()"
                ></img>
            </a>
        </Link>
        <ul className="header-nav">
            <li>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>{" "}
            <li>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
            </li>{" "}
            <li>
                <Link href="/resources">
                    <a>Resources</a>
                </Link>
            </li>
        </ul>
    </header>
);
