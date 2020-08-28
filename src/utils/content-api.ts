// TODO: seperate cockpit api package?
import axios from "axios";
import { Expression, matches } from "safe-filter";

export type FieldData = {
    name: string;
    type: string;
    localize: boolean;
    options: unknown[];
};

export type CollectionData<T> = {
    fields: Record<string, FieldData>;
    entries: T[];
    total: number;
};

/**
 * An api that interfaces with https://getcockpit.com,
 * a self-hosted & free CMS (content management system).
 * This api library provides typescript type definitions
 * so you don't need to cast it yourself.
 * However, you still need to create a type definition
 * for each collection (eg. BlogPost).
 */
export class ContentApi {
    token: string;
    apiUrl: string;
    protected collections: Record<string, Collection<unknown>>;

    constructor(apiToken: string, apiBaseUrl: string) {
        this.token = apiToken;
        this.apiUrl = apiBaseUrl + "/api";
        this.collections = {};
    }

    /**
     * Fetches a collection from the cockpit CMS.
     * @param name the name of the collection
     */
    col<T>(name: string): Collection<T> {
        if (!this.collections[name])
            this.collections[name] = new Collection(this, name);
        return this.collections[name] as Collection<T>;
    }
}

export class Collection<T> {
    api: ContentApi;
    name: string;

    constructor(api: ContentApi, collectionName: string) {
        this.api = api;
        this.name = collectionName;
    }

    /**
     * Fetches a collection from the provided cockpit content api.
     */
    async fetch(): Promise<CollectionData<T> | undefined> {
        try {
            const { data } = await axios.get(
                `${this.api.apiUrl}/collections/get/${this.name}?token=${this.api.token}`,
            );
            if (data) return data as CollectionData<T>;
        } catch {
            console.error(
                `An error occurred while fetching collection ${this.name}.`,
            );
            return;
        }
    }

    /**
     * Fetches entries of a collection from the provided cockpit content api.
     * If the query is specified it will filter out fields that do not match this query.
     * @param query Can be {} or a key-value map of the fields to match against.
     */
    async fetchEntries(query: Expression): Promise<T[]> {
        const data = await this.fetch();
        if (data) {
            return data.entries.filter((e) => matches(query, e));
        } else return [];
    }
}

const token = process.env.CONTENT_API_KEY ?? "";
const apiUrl = process.env.CONTENT_API_URL ?? "https://cockpit.theoparis.com";

export const api = new ContentApi(token, apiUrl);
