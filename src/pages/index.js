import React from "react";
import { Typography, Box } from "@material-ui/core";
import useSiteMetadata from "../hooks/useSiteMetadata";
import styled from "@material-ui/styles/styled";

const Hello = styled(Typography)(({ theme: { breakpoints } }) => ({
    [breakpoints.down("sm")]: {
        fontSize: "4rem",
    },
    [breakpoints.down("xs")]: {
        fontSize: "3rem",
    },
}));

const Index = () => {
    const { author } = useSiteMetadata();

    return (
        <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Hello variant="h1" gutterBottom>
                Hello.
            </Hello>
            <Typography variant="h5">I am {author}</Typography>
        </Box>
    );
};

export default Index;
