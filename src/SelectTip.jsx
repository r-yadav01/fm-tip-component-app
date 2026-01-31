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
  let dynamicCSS = {
    '--btn-bg': 'hsl(183, 100%, 15%)',
    '--font-color': 'white',
  };

  if (selected) {
    dynamicCSS['--btn-bg'] = 'hsl(172, 67%, 45%)';
    dynamicCSS['--font-color'] = 'hsl(183, 100%, 15%)';
  }

  return (
    <TipBtn
      disabled={selected}
      style={dynamicCSS}
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
  max-width: 8rem;
  width: 100%;
  height: 2rem;
  padding: 0rem 0.5rem;
  text-align: center;
  background-color: hsl(189, 47%, 97%);
  border-radius: 0.25rem;
  font-weight: 600;
  border: 1px solid hsl(189, 40%, 90%);
`;

const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
  color: hsl(186, 14%, 43%);
`;

const TipBtn = styled.button`
  height: 2rem;
  font-weight: 600;
  border-radius: 0.25rem;
  border: none;
  background-color: var(--btn-bg);
  color: var(--font-color);
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
