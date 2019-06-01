import React, { Fragment } from "react";
import "../styles/index.scss";

import BaseBorder from "./Base/BaseBorder";
import Drawer from "./Drawer/Drawer";

const Layout = ({ children }) => {
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
