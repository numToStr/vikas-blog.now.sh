import React, { Fragment } from "react";
import {
    Typography,
    Box,
    Grid,
    SvgIcon,
    Link as MuiLink,
} from "@material-ui/core";
import styled from "@material-ui/styles/styled";
import { Link } from "gatsby";

import useSiteMetadata from "../hooks/useSiteMetadata";
import SEO from "../components/SEO";
import Twitter from "../images/twitter.svg";
import Github from "../images/github.svg";

const links = [
    {
        text: "Blog",
        to: "/blog",
    },
    {
        text: "About",
        to: "/about",
    },
    {
        text: "Projects",
        to: "/",
    },
    {
        text: "Contact",
        to: "/contact",
    },
];

const Hello = styled(Typography)(({ theme: { breakpoints } }) => ({
    [breakpoints.down("sm")]: {
        fontSize: "4rem",
    },
    [breakpoints.down("xs")]: {
        fontSize: "3rem",
    },
}));

const Index = () => {
    const { author, description } = useSiteMetadata();

    return (
        <Fragment>
            <SEO title="Home" />
            <Box
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Hello variant="h1" paragraph>
                    <span role="img" aria-label="jsx-a11y/accessible-emoji">
                        👋
                    </span>
                    Hello.
                </Hello>
                <Typography variant="h4" gutterBottom>
                    I'm {author}
                </Typography>
                <Typography variant="body2" align="center" paragraph>
                    {description}
                </Typography>
                <Grid
                    container
                    spacing={5}
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <a
                            href="http://twitter.com/numbertostring"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SvgIcon>
                                <Twitter />
                            </SvgIcon>
                        </a>
                    </Grid>
                    <Grid item>
                        <a
                            href="http://github.com/vkasraj"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SvgIcon>
                                <Github />
                            </SvgIcon>
                        </a>
                    </Grid>
                </Grid>
                <Box mt={4}>
                    <Grid container spacing={3} justify="center">
                        {links.map(({ text, to }, $i) => (
                            <Grid item key={$i}>
                                <MuiLink
                                    color="textPrimary"
                                    component={Link}
                                    to={to}
                                >
                                    {text}
                                </MuiLink>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Fragment>
    );
};

export default Index;
