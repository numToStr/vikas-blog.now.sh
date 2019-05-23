import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

const Layout = ({ children }) => {
    const {
        site: { siteMetadata },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    title
                }
            }
        }
    `)

    return (
        <Fragment>
            <h1>
                {siteMetadata.author} | {siteMetadata.title}
            </h1>
            <Header />
            {children}
        </Fragment>
    )
}

export default Layout
