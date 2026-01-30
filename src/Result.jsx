import styled from 'styled-components';

export function Result({ bill, totalPeople, tipInfo, reset }) {
  let totalTip = null;
  if (tipInfo.endsWith('%')) {
    totalTip = (tipInfo.slice(0, -1) / 100) * bill;
  } else {
    totalTip = tipInfo;
  }

  let totalBill = bill + Number(totalTip);

  let tipPerPerson = Math.ceil((totalTip / totalPeople) * 100) / 100;
  let totalPerPerson = Math.ceil((totalBill / totalPeople) * 100) / 100;

  if (!tipPerPerson && tipPerPerson !== 0) tipPerPerson = '';
  if (!totalPerPerson && totalPerPerson !== 0) totalPerPerson = '';

  return (
    <Wrapper>
      <CalculatedSlot>
        <div>
          <SlotTag>Tip Amount</SlotTag>
          <PerPerson>/ person</PerPerson>
        </div>
        <SlotDisplay>
          ${tipPerPerson === Infinity ? '0.00' : tipPerPerson}
        </SlotDisplay>
      </CalculatedSlot>

      <CalculatedSlot>
        <div>
          <SlotTag>Total</SlotTag>
          <PerPerson>/ person</PerPerson>
        </div>
        <SlotDisplay>
          ${totalPerPerson === Infinity ? '0.00' : totalPerPerson}
        </SlotDisplay>
      </CalculatedSlot>

      <Reset onClick={reset}>RESET</Reset>
    </Wrapper>
  );
}

const CalculatedSlot = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SlotDisplay = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Wrapper = styled.section`
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Reset = styled.button`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: 600;
`;

const SlotTag = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
`;

const PerPerson = styled.p`
  font-size: 0.75rem;
`;
