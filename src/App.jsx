import React from 'react';
import { Calculator } from './Calculator';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';

function App() {
    // logic goes here

    return (
        // styling goes here
        <Wrapper>
            <Header>
                <Name>SPLI</Name>
                <Name>TTER</Name>
            </Header>

            <Calculator />
            <GlobalStyles />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 550px;
    outline: 2px dashed red;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: hsl(185, 41%, 84%);

    @media (min-width: 550px) {
        max-width: 100%;
        height: 100vh;
        justify-content: space-evenly;
        padding-inline: 0.5rem;
    }
`;

const Header = styled.header`
    text-align: center;
    padding-block: 1rem;
`;

const Name = styled.p`
    letter-spacing: 0.25rem;
    font-weight: 700;
    color: hsl(183, 100%, 15%);
    font-size: 1.25rem;
`;

export default App;
