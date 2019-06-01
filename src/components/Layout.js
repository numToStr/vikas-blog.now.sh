import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/index.scss";

import BaseBorder from "./Base/BaseBorder";
import Drawer from "./Drawer/Drawer";

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
                <Drawer />
                {children}
            </BaseBorder>
        </Fragment>
    );
};

export default Layout;
