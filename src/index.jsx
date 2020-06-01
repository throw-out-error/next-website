import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";
import { Home } from "./home.jsx";
import "./styles/index.scss";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { About } from "./about.jsx";
import { Projects } from "./projects.jsx";
import { Container } from "react-bootstrap";

export default function App() {
    const router = useHistory();
    setTimeout(() => router.push("/home"), 5000);
    return (
        <Container className="main">
            <h2 className="error">
                Syntax error on 69:420. Please wait to be redirected...
            </h2>
        </Container>
    );
}

ReactDOM.render(
    <Router>
        <Helmet>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1, width=device-width, height=device-height, viewport-fit=cover"
            />
            <title>throw out Error()</title>
            <meta property="og:title" content="throw out Error()" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://throw-out-error.dev" />
            <meta
                property="og:image"
                content="https://throw-out-error.dev/logo.jpg"
            />
            <meta
                property="og:description"
                content="Syntax error on line 69:420"
            />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
        <Header />
        <Switch>
            <Route path="/" exact>
                <App />
            </Route>
            <Route path="/home" exact>
                <Home />
            </Route>
            <Route path="/about" exact>
                <About />
            </Route>
            <Route path="/projects" exact>
                <Projects />
            </Route>
        </Switch>
        <Footer />
    </Router>,
    document.getElementById("root")
);
