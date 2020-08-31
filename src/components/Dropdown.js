import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const setEvent = (e) => {
    if (!ref.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', setEvent);

    return () => {
      document.body.removeEventListener('click', setEvent);
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (selected.value === option.value) return null;
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => setSelected(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label htmlFor='' className='label'>
          {label}
        </label>

        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu   ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

Dropdown.defaultProps = { label: 'Please select an item' };

export default Dropdown;
