import Layout from "../components/Layout";

const AboutPage = () => (
    <Layout title="throw out Error(about)">
        <h2>About</h2>
        <p>
            Throw Out Error is a team made up of programmers{" "}
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
            </a>
            .
        </p>
    </Layout>
);

export default AboutPage;
