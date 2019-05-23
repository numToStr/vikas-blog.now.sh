const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
    path: `.env.development`,
});

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;

    const {
        internal: { type },
        fileAbsolutePath,
    } = node;

    if (type === "MarkdownRemark") {
        const filePath = path.parse(fileAbsolutePath);

        createNodeField({
            node,
            name: "slug",
            value: filePath.name,
        });
    }
};
