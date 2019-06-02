import React, { Fragment } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import SEO from "../components/SEO";

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
        <Fragment>
            <SEO title="Blog" />
            <h1>Blog</h1>
            <ol>{list}</ol>
        </Fragment>
    );
};

export default blog;
