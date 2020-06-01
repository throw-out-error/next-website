import React from "react";

export function Footer() {
    return (
        <footer>
            Designed By{" "}
            <a
                href="https://theoparis.com/about"
                target="_blank"
                rel="noopener noreferrer"
            >
                Theo Paris
            </a>{" "}
            & Powered By
            <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {" "}
                Next.js
            </a>
            .
        </footer>
    );
}
