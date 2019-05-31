import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/index.scss";

import Header from "./Header";
import NewLayout from "./NewLayout";
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
        <NewLayout>
            <Typography>
                {siteMetadata.author} | {siteMetadata.title}
            </Typography>
            <Header />
            {children}
        </NewLayout>
    );
};

export default Layout;
