import React from 'react';

export function Calculator() {
  const [totalBill, setTotalBill] = React.useState(100);
  const [totalPeople, setTotalPeople] = React.useState(10);
  const [tipChosen, setTipChosen] = React.useState('10%');

  return (
    <article>
      <InputInfo
        about='Bill'
        iconPath='icon-dollar.svg'
        value={totalBill}
      />
      <SelectTip tipChosen={tipChosen} />
      <InputInfo
        about='Number of People'
        iconPath='icon-person.svg'
        value={totalPeople}
      />
      <Result
        bill={totalBill}
        totalPeople={totalPeople}
        tipInfo={tipChosen}
      />
    </article>
  );
}

function InputInfo({ about, iconPath, value }) {
  const inputId = about.replace(/\s+/g, '');

  return (
    <section>
      <label htmlFor={inputId}>{about}</label>
      <input
        type='number'
        id={inputId}
        value={value}
      />
      <img
        src={`./src/assets/${iconPath}`}
        alt={iconPath}
      />
    </section>
  );
}

function SelectTip({ tipChosen }) {
  const tipPercents = ['5%', '10%', '15%', '25%', '50%'];

  // let customTip = false;

  // if (!tipChosen.endsWith('%')) {
  //   customTip = true;
  // }

  const tipElements = tipPercents.map((percent) => {
    let selected = false;
    if (percent === tipChosen) selected = true;

    return (
      <Tip
        percent={percent}
        selected={selected}
      />
    );
  });

  return (
    <section>
      {tipElements}
      <input
        type='number'
        placeholder='Custom'
      />
    </section>
  );
}

function Tip({ percent, selected }) {
  // use the selected prop to give the selected btn a distinct look
  return <button disabled={selected}>{percent}</button>;
}

function Result({ bill, totalPeople, tipInfo }) {
  let totalTip = null;
  if (tipInfo.endsWith('%')) {
    totalTip = (tipInfo.slice(0, -1) / 100) * bill;
  } else {
    totalTip = tipInfo;
  }

  let totalBill = bill + Number(totalTip);

  const tipPerPerson = Math.ceil((totalTip / totalPeople) * 100) / 100;
  const totalPerPerson = Math.ceil((totalBill / totalPeople) * 100) / 100;

  return (
    <section>
      <div>
        <div>
          <p>Tip Amount</p>
          <p>/ person</p>
        </div>
        <p>${tipPerPerson}</p>
      </div>

      <div>
        <div>
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p>${totalPerPerson}</p>
      </div>

      <button>RESET</button>
    </section>
  );
}
