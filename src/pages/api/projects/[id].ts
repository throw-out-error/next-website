import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../../typings";
import { api } from "../../../utils/content-api";
import { ContentType, transformProject } from "../../../utils/data";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        let item: Project | undefined;
        const id = req.query.id;
        if (id)
            item = (
                await api
                    .col(ContentType.PROJECT)
                    .fetchEntries({ _id: id as string })
            )[0] as Project | undefined;
        if (item) item = transformProject(item);
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};

export default handler;
