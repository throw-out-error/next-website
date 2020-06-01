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

export default function App() {
    const router = useHistory();
    setTimeout(() => router.push("/home"), 5000);
    return (
        <div className="container">
            <main>
                <h2 className="error">
                    Syntax error on 69:420. Please wait to be redirected...
                </h2>
            </main>
        </div>
    );
}

ReactDOM.render(
    <Router>
        <Helmet>
            <meta charSet="utf-8" />
            <title>throw out Error()</title>
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
        <Header/>
        <Switch>
            <Route path="/" exact>
                <App></App>
            </Route>
            <Route path="/home" exact>
                <Home></Home>
            </Route>
        </Switch>
        <Footer/>
    </Router>,
    document.getElementById("root")
);
