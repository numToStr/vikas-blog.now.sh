/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react");
const Layout = require("./src/components/Layout").default;
const RootLayout = require("./src/components/RootLayout").default;

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};

exports.wrapRootElement = ({ element, props }) => {
    return <RootLayout {...props}>{element}</RootLayout>;
};
