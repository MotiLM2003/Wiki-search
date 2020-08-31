import React, { useState } from 'react';
import Accordion from './Acoordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

const items = [
  {
    title: 'What is React?',
    content: 'react is somethin',
  },
  {
    title: 'What us React?',
    content: 'rsadsdsadsad',
  },
  {
    title: 'sadsddeact?',
    content: 'reacsadasdsa ds hin',
  },
];

const options = [
  {
    label: 'The color Red',
    value: 'red',
  },
  {
    label: 'The color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  // const [selected, setSelected] = useState(options[0]);

  return (
    <div className='ui container'>
      <Translate />

      {/* {showdropDown ? (
        <Dropdown
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      ) : null} */}

      {/* <Search /> */}
      {/* <Accordion items={items} /> */}
    </div>
  );
};

export default App;
