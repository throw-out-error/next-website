import React from "react";
import Link from "next/link";

export const Header = () => (
    <header>
        <Link href="/home">
            <a className="logo-wrapper">
                <img
                    className="logo"
                    src="/images/logo-transparent.svg"
                    alt="throw out error()"
                ></img>
            </a>
        </Link>
        <ul className="header-nav">
            <li key="about">
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>{" "}
            <li key="projects">
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
            </li>{" "}
            <li key="resources">
                <Link href="/resources">
                    <a>Resources</a>
                </Link>
            </li>
        </ul>
    </header>
);
