// TODO: seperate cockpit api package?
import CockpitStore from "@throw-out-error/store-cockpit-cms";
const apiToken = process.env.CONTENT_API_KEY ?? "";
const apiBaseUrl =
    process.env.CONTENT_API_URL ?? "https://cockpit.theoparis.com";

export const api = new CockpitStore({ apiToken, apiBaseUrl });
