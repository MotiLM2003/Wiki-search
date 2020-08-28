import React from 'react';
import Accordion from './Acoordion';
import Search from './Search';

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

const App = () => {
  return (
    <div className='ui container'>
      <Search />
      {/* <Accordion items={items} /> */}
    </div>
  );
};

export default App;
