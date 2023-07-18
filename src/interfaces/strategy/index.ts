import { CustomerStrategyInterface } from 'interfaces/customer-strategy';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface StrategyInterface {
  id?: string;
  name: string;
  description?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  customer_strategy?: CustomerStrategyInterface[];
  organization?: OrganizationInterface;
  _count?: {
    customer_strategy?: number;
  };
}

export interface StrategyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
}
