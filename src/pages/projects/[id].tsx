import { GetServerSideProps } from "next";

import { Project } from "../../typings";
import { ContentType, transformProject } from "../../utils/data";
import { api } from "../../utils/content-api";
import React from "react";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

type Props = {
    item?: Project;
    errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
    if (errors) {
        return (
            <Layout title="throw out Error(error)">
                <p>
                    <span style={{ color: "red" }}>Error:</span> {errors}
                </p>
            </Layout>
        );
    }

    return (
        <Layout title={`throw out Error(${item ? item.name : "Detail"})`}>
            {item && <ListDetail item={item} />}
        </Layout>
    );
};

export default StaticPropsDetail;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

// TODO: use api route
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        let item: Project | undefined;
        const id = params?.id;
        if (id)
            item = (
                await api
                    .col(ContentType.PROJECT)
                    .fetchEntries({ _id: id as string })
            )[0] as Project | undefined;
        if (item) item = transformProject(item);
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item } };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
