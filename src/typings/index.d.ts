declare module "*.scss" {
	const content: { [className: string]: string };
	export = content;
}

export type Project = {
  id: number
  name: string,
  source?: string,
}
