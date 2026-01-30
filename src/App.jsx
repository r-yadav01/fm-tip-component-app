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
  max-width: 450px;
  outline: 2px dashed red;
  margin-inline: auto;
`;

const Header = styled.header`
  text-align: center;
  padding-block: 1.5rem;
`;

const Name = styled.p`
  letter-spacing: 0.25rem;
  font-weight: 700;
`;

export default App;
