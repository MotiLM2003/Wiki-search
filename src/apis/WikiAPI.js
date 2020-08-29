import axios from 'axios';

export default axios.create({
  params: {
    action: 'query',
    list: 'search',
    origin: '*',
    format: 'json',
  },
});
