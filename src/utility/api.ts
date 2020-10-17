import { mockData } from '../mockData';

// mocking an API call to get the data
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(mockData.data);
  });
};
