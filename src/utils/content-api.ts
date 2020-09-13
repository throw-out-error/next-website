// TODO: seperate cockpit api package?
import CockpitStore from "@throw-out-error/store-cockpit-cms";
const apiToken = process.env.CMS_API_KEY ?? "";
const apiBaseUrl = process.env.CMS_API_URI ?? "https://cms.theoparis.com";

export const api = new CockpitStore({ apiToken, apiBaseUrl });
