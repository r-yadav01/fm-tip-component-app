import React from 'react';

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
    <article>
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
    </article>
  );
}

function InputInfo({ about, iconPath, value, onValueChange }) {
  const inputId = about.replace(/\s+/g, '');

  return (
    <section>
      <label htmlFor={inputId}>{about}</label>
      <input
        type='number'
        id={inputId}
        value={value === 0 ? '' : value}
        placeholder='0'
        onChange={(e) => onValueChange(Number(e.target.value))}
      />
      <img
        src={`./src/assets/${iconPath}`}
        alt={iconPath}
      />
    </section>
  );
}

function SelectTip({ tipChosen, onTipChange }) {
  const tipPercents = ['5%', '10%', '15%', '25%', '50%'];

  const tipElements = tipPercents.map((percent) => {
    let selected = false;
    if (percent === tipChosen) selected = true;

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
    <section>
      {tipElements}

      <input
        type='number'
        placeholder='$Custom'
        value={tipChosen}
        onChange={(e) => onTipChange(e.target.value)}
      />
    </section>
  );
}

function Tip({ percent, selected, onSelected }) {
  // use the selected prop to give the selected btn a distinct look
  return (
    <button
      disabled={selected}
      onClick={(e) => onSelected(e.target.textContent)}
    >
      {percent}
    </button>
  );
}

function Result({ bill, totalPeople, tipInfo, reset }) {
  let totalTip = null;
  if (tipInfo.endsWith('%')) {
    totalTip = (tipInfo.slice(0, -1) / 100) * bill;
  } else {
    totalTip = tipInfo;
  }

  let totalBill = bill + Number(totalTip);

  // if (bill || tipInfo) totalPeople = 1;
  // to avoid getting NaN by dividing by 0

  let tipPerPerson = Math.ceil((totalTip / totalPeople) * 100) / 100;
  let totalPerPerson = Math.ceil((totalBill / totalPeople) * 100) / 100;

  if (!tipPerPerson && tipPerPerson !== 0) tipPerPerson = '';
  if (!totalPerPerson && totalPerPerson !== 0) totalPerPerson = '';

  return (
    <section>
      <div>
        <div>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p>${tipPerPerson === Infinity ? '0.00' : tipPerPerson}</p>
      </div>

      <div>
        <div>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p>${totalPerPerson === Infinity ? '0.00' : totalPerPerson}</p>
      </div>

      <button onClick={reset}>RESET</button>
    </section>
  );
}
