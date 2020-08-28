declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
}

export type Project = {
    id: string;
    name: string;
    description?: string;
    source?: string;
};
