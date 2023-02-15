import axios from 'axios';

const TEST_API_URL = 'https://api.github.com/repos/tannerlinsley/react-query';

//response yra ne tik duomenys, o data yra tik griztantys duomenys

export const fetchTestData = () => {
  return axios.get(TEST_API_URL).then((response) => response.data);
};
