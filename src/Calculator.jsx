import React from 'react';
import { InputInfo } from './InputInfo';
import { SelectTip } from './SelectTip';
import { Result } from './Result';
import styled from 'styled-components';

export function Calculator() {
  const [totalBill, setTotalBill] = React.useState('');
  const [totalPeople, setTotalPeople] = React.useState('');
  const [tipChosen, setTipChosen] = React.useState('');

  function resetAllStates() {
    setTipChosen('');
    setTotalPeople('');
    setTotalBill('');
  }

  return (
    <Wrapper>
      <InputInfo
        about='Bill'
        iconPath='icon-dollar.svg'
        value={totalBill}
        onValueChange={setTotalBill}
      />
      <SelectTip
        tipChosen={tipChosen}
        onTipChange={setTipChosen}
      />
      <InputInfo
        about='Number of People'
        iconPath='icon-person.svg'
        value={totalPeople}
        onValueChange={setTotalPeople}
      />
      <Result
        bill={totalBill}
        totalPeople={totalPeople}
        tipInfo={tipChosen}
        setTotalPeople={setTotalPeople}
        reset={resetAllStates}
      />
    </Wrapper>
  );
}

const Wrapper = styled.article`
  border-radius: 5% 5% 0% 0%;
  outline: 1px solid red;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
