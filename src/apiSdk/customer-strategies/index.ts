import axios from 'axios';
import queryString from 'query-string';
import { CustomerStrategyInterface, CustomerStrategyGetQueryInterface } from 'interfaces/customer-strategy';
import { GetQueryInterface } from '../../interfaces';

export const getCustomerStrategies = async (query?: CustomerStrategyGetQueryInterface) => {
  const response = await axios.get(`/api/customer-strategies${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createCustomerStrategy = async (customerStrategy: CustomerStrategyInterface) => {
  const response = await axios.post('/api/customer-strategies', customerStrategy);
  return response.data;
};

export const updateCustomerStrategyById = async (id: string, customerStrategy: CustomerStrategyInterface) => {
  const response = await axios.put(`/api/customer-strategies/${id}`, customerStrategy);
  return response.data;
};

export const getCustomerStrategyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/customer-strategies/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCustomerStrategyById = async (id: string) => {
  const response = await axios.delete(`/api/customer-strategies/${id}`);
  return response.data;
};
