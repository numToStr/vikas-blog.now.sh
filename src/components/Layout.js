import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/index.scss";

import Header from "./Header";
import { Typography } from "@material-ui/core";

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
    `);

    return (
        <Fragment>
            <Typography>
                {siteMetadata.author} | {siteMetadata.title}
            </Typography>
            <Header />
            {children}
        </Fragment>
    );
};

export default Layout;
