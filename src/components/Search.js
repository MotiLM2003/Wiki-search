import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WikiAPI from '../apis/WikiAPI';
import { render } from '@testing-library/react';
const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  const onTermChanged = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  const renderedList = results.map((item) => {
    return (
      <div key={item.pageid} className='item'>
        <div className='right floated cotent'>
          <a
            className='ui button'
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{item.title}</div>
          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter Search Term</label>
          <input
            type='text'
            value={term}
            className='input'
            onChange={onTermChanged}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedList}</div>
    </div>
  );
};

export default Search;
