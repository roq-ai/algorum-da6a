import { UserInterface } from 'interfaces/user';
import { StrategyInterface } from 'interfaces/strategy';
import { GetQueryInterface } from 'interfaces';

export interface CustomerStrategyInterface {
  id?: string;
  user_id?: string;
  strategy_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  strategy?: StrategyInterface;
  _count?: {};
}

export interface CustomerStrategyGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  strategy_id?: string;
}
