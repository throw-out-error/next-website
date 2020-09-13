const path = require("path");

require("dotenv").config();

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "public")],
    },
    webpack: (cfg) => {
        cfg.module.rules.push({
            test: /\.md$/,
            loader: "frontmatter-markdown-loader",
            options: { mode: ["react-component"] },
        });
        return cfg;
    },
};
