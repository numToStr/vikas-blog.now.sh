import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const BaseLink = styled(Link)`
    position: absolute;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: #333;
`;

const BottomLink = styled(BaseLink)`
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 50%);
`;

const LeftLink = styled(BaseLink)`
    left: 1rem;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
`;

const RightLink = styled(BaseLink)`
    right: 1rem;
    top: 50%;
    transform: translate(50%, -50%) rotate(-90deg);
`;

const Header = () => {
    return (
        <Fragment>
            <BottomLink to="/">Home</BottomLink>
            <LeftLink to="/about">About</LeftLink>
            <RightLink to="/blog">Blog</RightLink>
        </Fragment>
    );
};

export default Header;
