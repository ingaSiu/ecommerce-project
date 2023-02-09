import axios from 'axios';

const USERS_API_URL = 'https://testapi.io/api/rokasandreikenas/resource/user';

export const fetchUsers = () => {
  return axios.get(USERS_API_URL).then((response) => response.data.data);
};

export const createUser = (newUser) => {
  return axios.post(USERS_API_URL, newUser).then((response) => response.data);
};

export const loginUser = async (loggingUser) => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { email, password } = loggingUser;
    const userChecker = (user) => user.email === email && user.password === password;
    const userExists = users.some(userChecker);
    if (userExists) {
      resolve();
    } else {
      resolve('Invalid credentials');
    }
  });
};
