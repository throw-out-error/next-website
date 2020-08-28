import { Project } from "../typings";

export enum ContentType {
    PROJECT = "project",
}

export const transformProject = (project: unknown): Project => {
    const p = project as Project;
    p.id = (project as Record<string, unknown>)._id as string;
    return p;
};

// Temporary, use database
export const projects: Project[] = [
    {
        id: "0",
        name: "Throw Out Utils",
        description:
            "A collection of programming utilities by throw-out-error that includes an improved astar pathfinding algorithm, and a bunch of other utilities.",
        source: "https://github.com/throw-out-error/throw-out-utils",
    },
];
