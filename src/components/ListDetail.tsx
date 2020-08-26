import * as React from "react";

import { Project } from "../typings";

type ListDetailProps = {
    item: Project;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
    <div>
        <h3>{user.name}</h3>
        {user.source ? <a href={user.source}>Source Code</a> : <div />}
    </div>
);

export default ListDetail;
