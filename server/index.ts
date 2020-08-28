import { createServer } from "http";
import { parse } from "url";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const port = process.env.PORT || 3000;
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url as string, true);
        handle(req, res, parsedUrl);
    }).listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
});
