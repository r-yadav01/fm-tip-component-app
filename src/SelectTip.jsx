import styled from 'styled-components';

export function SelectTip({ tipChosen, onTipChange }) {
  const tipPercents = ['5%', '10%', '15%', '25%', '50%'];

  const tipElements = tipPercents.map((percent) => {
    let selected = percent === tipChosen;

    return (
      <Tip
        key={percent}
        percent={percent}
        selected={selected}
        onSelected={onTipChange}
      />
    );
  });

  return (
    <Wrapper>
      <Label htmlFor='tip'>Select Tip %</Label>
      <TipOptions>
        {tipElements}

        <Custom
          type='number'
          id='tip'
          placeholder='$Custom'
          value={tipChosen}
          onChange={(e) => onTipChange(e.target.value)}
        />
      </TipOptions>
    </Wrapper>
  );
}

function Tip({ percent, selected, onSelected }) {
  return (
    <TipBtn
      disabled={selected}
      onClick={(e) => onSelected(e.target.textContent)}
    >
      {percent}
    </TipBtn>
  );
}

const TipOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const Custom = styled.input`
  max-width: 45vw;
  height: 2rem;
  padding: 0rem 0.5rem;
  text-align: center;
`;

const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
`;

const TipBtn = styled.button`
  height: 2rem;
  font-weight: 600;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
