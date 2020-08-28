import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../../typings";
import { api } from "../../../utils/content-api";
import { ContentType, transformProject } from "../../../utils/data";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const projects: Project[] = (
            await api.col<Project>(ContentType.PROJECT).fetchEntries({})
        ).map((p) => transformProject(p));
        if (!Array.isArray(projects)) {
            throw new Error("Cannot find user data");
        }

        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;
