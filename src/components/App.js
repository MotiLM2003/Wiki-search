import React, { useState } from 'react';
import Accordion from './Acoordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

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
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className='ui container'>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          setSelected={setSelected}
        />
      </Route>
      {/* <Search /> */}
    </div>
  );
};

export default App;
