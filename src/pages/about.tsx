import Layout from "../components/Layout";

const AboutPage = () => (
    <Layout title="throw out Error(about)">
        <h2>About</h2>
        <p>
            <a
                href="https://github.com/throw-out-error"
                target="_blank"
                rel="noopener noreferrer"
            >
                Throw Out Error
            </a>{" "}
            is a team made up of programmers{" "}
            <a
                href="https://theoparis.com/about"
                target="_blank"
                rel="noopener noreferrer"
            >
                Theo Paris
            </a>
            ,{" "}
            <a
                href="https://onyxcode.space/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Dan (onyxcode)
            </a>
            , and{" "}
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
            </a>
            .
        </p>
    </Layout>
);

export default AboutPage;
