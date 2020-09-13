import { Item } from "@throw-out-error/storez";

declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
}

export class Project extends Item {
    name: string;
    description?: string;
    sourceUrl?: string;
    homepageUrl?: string;
}
