import { baseApiUrl } from './constants';

const fetchCustomers = () => {
  const url = baseApiUrl + '/customers';

  return fetch(url);
};

export {
  fetchCustomers,
};