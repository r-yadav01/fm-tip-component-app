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
            <InputSection>
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
                    errorMsg='someone has to pay the bill'
                />
            </InputSection>
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

const InputSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media (min-width: 550px) {
        max-width: 50%;
    }
`;

const Wrapper = styled.article`
    border-radius: 1rem 1rem 0rem 0rem;
    flex-direction: column;
    background-color: white;
    padding: 1.25rem;
    display: flex;
    gap: 1.5rem;

    @media (min-width: 550px) {
        max-width: 1100px;
        margin-inline: auto;
        flex-direction: row;
        border-radius: 1rem;
    }
`;
