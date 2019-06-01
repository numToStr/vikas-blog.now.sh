import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

export const data = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
`;

const Blog = ({
    data: {
        markdownRemark: { frontmatter, html },
    },
}) => {
    return (
        <Layout>
            <div style={{ flexGrow: 1, padding: "1rem", overflowY: "auto" }}>
                <div>This is Blog Page</div>
                <p>{frontmatter.title}</p>
                <p>{frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
};

export default Blog;
