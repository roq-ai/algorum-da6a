import axios from 'axios';
import queryString from 'query-string';
import { StrategyInterface, StrategyGetQueryInterface } from 'interfaces/strategy';
import { GetQueryInterface } from '../../interfaces';

export const getStrategies = async (query?: StrategyGetQueryInterface) => {
  const response = await axios.get(`/api/strategies${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createStrategy = async (strategy: StrategyInterface) => {
  const response = await axios.post('/api/strategies', strategy);
  return response.data;
};

export const updateStrategyById = async (id: string, strategy: StrategyInterface) => {
  const response = await axios.put(`/api/strategies/${id}`, strategy);
  return response.data;
};

export const getStrategyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/strategies/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteStrategyById = async (id: string) => {
  const response = await axios.delete(`/api/strategies/${id}`);
  return response.data;
};
