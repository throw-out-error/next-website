import type { AppProps /*, AppContext */ } from "next/app";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default App;
