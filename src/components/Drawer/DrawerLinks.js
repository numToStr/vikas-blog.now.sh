import React, { useState } from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import { animated, useTrail } from "react-spring";

const LinkDiv = styled(animated.div)`
    text-transform: uppercase;
    font-weight: bold;
    margin: 0.8rem 0;
    line-height: normal;
`;

const links = [
    {
        text: "Home",
        to: "/",
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

const config = { mass: 1, tension: 170, friction: 18 };

export default ({ open, onTap }) => {
    const [hover, setHover] = useState(false);

    // TODO: Just a hack, Need a better solution
    const handleClick = link => ev => {
        ev.preventDefault();
        onTap();
        setTimeout(() => {
            navigate(link);
        }, 650);
    };

    const trails = useTrail(links.length, {
        config,
        from: {
            opacity: 0,
            xy: [-50, -200],
            fontSize: 0,
            letterSpacing: 0,
        },
        to: {
            opacity: open ? 1 : 0,
            xy: open ? [0, 0] : [-50, -200],
            fontSize: open ? 5 : 0,
            letterSpacing: hover ? 20 : 10,
            color: hover ? "#ff0" : "#fff",
        },
    });

    return trails.map(({ xy, fontSize, opacity, letterSpacing, color }, $i) => {
        const curr = links[$i];
        return (
            <LinkDiv
                key={curr.text}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    opacity: opacity.interpolate([0, 0.7, 1], [0, 0.3, 1]),
                    transform: xy.interpolate(
                        (_x, _y) => `translate3d(${_x}%,${_y}px,0)`
                    ),
                    fontSize: fontSize.interpolate(fsize => `${fsize}rem`),
                    letterSpacing,
                    color,
                }}
            >
                <a onClick={handleClick(curr.to)} href={curr.to}>
                    {curr.text}
                </a>
            </LinkDiv>
        );
    });
};
