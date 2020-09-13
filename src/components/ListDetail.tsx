import * as React from "react";

import { Project } from "../typings";

type ListDetailProps = {
    item: Project;
};

const ListDetail = ({ item }: ListDetailProps) => (
    <div>
        <h3>
            {item.homepageUrl ? (
                <a href={item.homepageUrl}>{item.name}</a>
            ) : (
                "Untitled Project"
            )}
        </h3>
        <p>{item.description}</p>
        {item.sourceUrl ? <a href={item.sourceUrl}>Source Code</a> : <div />}
    </div>
);

export default ListDetail;
