import React, { Fragment } from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

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
        <Fragment>
            <SEO title={frontmatter.title} />
            <div style={{ flexGrow: 1, padding: "1rem", overflowY: "auto" }}>
                <div>This is Blog Page</div>
                <p>{frontmatter.title}</p>
                <p>{frontmatter.date}</p>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Fragment>
    );
};

export default Blog;
