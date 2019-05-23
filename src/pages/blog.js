import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

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
                }
            }
        }
    `)

    const list = nodes.map(({ frontmatter: { title, date } }, $i) => (
        <li key={title}>
            <h3>{title}</h3>
            <p>{date}</p>
        </li>
    ))

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>{list}</ol>
        </Layout>
    )
}

export default blog
