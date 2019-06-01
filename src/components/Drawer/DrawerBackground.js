import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

const DrawerBack = styled(animated.div)`
    height: 100%;
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export default ({ open, children }) => {
    const spring = useSpring({
        from: { x: 0 },
        to: {
            x: open ? 1 : 0,
        },
    });

    return (
        <DrawerBack
            style={{
                width: spring.x
                    .interpolate([0, 0.2, 0.5, 1], [0, 50, 80, 100])
                    .interpolate(x => `${x}%`),
            }}
        >
            {children}
        </DrawerBack>
    );
};
