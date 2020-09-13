import React from "react";
import Link from "next/link";

import { Project } from "../typings";

type Props = {
    data: Project;
};

const ListItem = ({ data }: Props) => (
    <Link href="/projects/[id]" as={`/projects/${data.id}`}>
        <a>{data.name}</a>
    </Link>
);

export default ListItem;
