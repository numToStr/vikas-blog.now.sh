import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

import "../styles/index.scss";
import Social from "./Social";

const NewLayout = ({ children }) => {
    const [drawer, setDrawer] = useState(false);

    const { x } = useSpring({
        from: {
            x: 0,
        },
        x: drawer ? 1 : 0,
        config: {
            tension: 490,
            friction: 10,
            duration: 1000,
        },
    });

    return (
        <Box
            pt={3}
            pb={3}
            pr={3}
            bgcolor="background.paper"
            height="100%"
            width="100%"
            display="flex"
        >
            <Box
                bgcolor="red"
                p={2}
                width={8 * 10}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexDirection="column"
            >
                <button onClick={() => setDrawer(v => !v)}>click</button>
                <Social />
            </Box>
            <Box
                position="absolute"
                height="100%"
                bgcolor="background.paper"
                ml={10}
                component={animated.div}
                style={{
                    width: x
                        .interpolate({
                            range: [
                                0,
                                0.25,
                                0.35,
                                0.45,
                                0.55,
                                0.65,
                                0.75,
                                0.9,
                                1,
                            ],
                            output: [0, 5, 15, 30, 50, 70, 85, 95, 100],
                        })
                        .interpolate(x => `${x}%`),
                }}
            >
                heloo world
            </Box>
            <Box p={3} bgcolor="black" height="100%" color="white" flexGrow={1}>
                {children}
            </Box>
        </Box>
    );
};

export default NewLayout;
