import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Typography } from "@material-ui/core";
import "../styles/index.scss";

import Header from "./Header";
import BaseBorder from "./Base/BaseBorder";

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
            <BaseBorder>
                <Typography>
                    {siteMetadata.author} | {siteMetadata.title}
                </Typography>
                <Header />
                {children}
            </BaseBorder>
        </Fragment>
    );
};

export default Layout;
