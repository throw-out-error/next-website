import { GetServerSideProps } from "next";

import { Project } from "../../typings";
import { api } from "../../utils/content-api";
import Layout from "../../components/Layout";
import List from "../../components/List";
import { ContentType, transformProject } from "../../utils/data";

type Props = {
    items: Project[];
};

const WithStaticProps = ({ items }: Props) => (
    <Layout title="throw out Error(projects)">
        <h2>Projects</h2>
        <List items={items} />
    </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: Project[] = (
        await api.col<Project>(ContentType.PROJECT).fetchEntries({})
    ).map((p) => transformProject(p));
    return { props: { items } };
};

export default WithStaticProps;
