import * as yup from 'yup';

export const customerStrategyValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  strategy_id: yup.string().nullable(),
});
