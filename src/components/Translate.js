import React, { useState, useEffect } from 'react';
import DrowDown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Hebrew',
    value: 'he',
  },
  {
    label: 'Afrikaans',
    value: 'af',
  },

  {
    label: 'Hindi',
    value: 'hi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <DrowDown
        label='Select a language'
        options={options}
        selected={language}
        setSelected={setLanguage}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
