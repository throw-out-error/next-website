import React from "react";
import { Container } from 'react-bootstrap';

export function About() {
    return (
        <div>
            <Container className="main">
                <p>
                    Throw Out Error is a team made up of teenage programmers{" "}
                    <a
                        href="https://theoparis.com/about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Theo Paris
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://github.com/Brent-Trenholme"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Brent Trenholme
                    </a>
                    . Some project contributors also include{" "}
                    <a
                        href="https://github.com/SebastianSpeitel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sebastian Speitel
                    </a>.
                </p>
            </Container>
        </div>
    );
}
