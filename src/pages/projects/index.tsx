import { GetStaticProps } from "next";

import { Project } from "../../typings";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
    items: Project[];
};

const WithStaticProps = ({ items }: Props) => (
    <Layout title="throw out Error(projects)">
        <h2>Projects</h2>
        <List items={items} />
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: Project[] = sampleUserData;
    return { props: { items } };
};

export default WithStaticProps;
