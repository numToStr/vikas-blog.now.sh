import React from "react";
import styled from "styled-components";

const BasePadding = styled.div`
    padding: 1rem;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;

const BaseBorder = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 5px solid #000;
    padding: 1rem;
    position: relative;
`;

const Container = styled.div`
    flex-grow: 1;
`;

export default ({ children }) => (
    <BasePadding>
        <BaseBorder>
            <Container>{children}</Container>
        </BaseBorder>
    </BasePadding>
);
