import React, { Fragment } from "react";
import { Typography, Box, Grid, SvgIcon } from "@material-ui/core";
import styled from "@material-ui/styles/styled";

import useSiteMetadata from "../hooks/useSiteMetadata";
import SEO from "../components/SEO";
import Twitter from "../images/twitter.svg";
import Github from "../images/github.svg";

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
            <SEO title="Home | Vikas Raj" />
            <Box
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Hello variant="h2" paragraph>
                    <span role="img" aria-label="jsx-a11y/accessible-emoji">
                        👋
                    </span>
                    Hello.
                </Hello>
                <Typography variant="h5" gutterBottom>
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
            </Box>
        </Fragment>
    );
};

export default Index;
