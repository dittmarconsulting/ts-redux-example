import { mockData } from '../mockData';
import { IProduct } from '../types/iProduct';


// mocking an API call to get the data
export const getProducts = () => new Promise<IProduct[]>((resolve) => {
    resolve(mockData.data);
  })
