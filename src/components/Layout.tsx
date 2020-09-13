import React, { ReactNode } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = "throw out Error()" }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>

        <Header />
        <Container className="main">{children}</Container>
        <Footer />
    </div>
);

export default Layout;
