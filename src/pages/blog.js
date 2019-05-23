import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";

const blog = () => {
    const {
        allMarkdownRemark: { nodes },
    } = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        title
                        date
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `);

    const list = nodes.map(
        ({ frontmatter: { title, date }, fields: { slug } }, $i) => (
            <li key={title}>
                <Link to={`/blog/${slug}`}>
                    <h3>{title}</h3>
                </Link>
                <p>{date}</p>
            </li>
        )
    );

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>{list}</ol>
        </Layout>
    );
};

export default blog;
