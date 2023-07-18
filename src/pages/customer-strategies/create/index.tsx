import AppLayout from 'layout/app-layout';
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberInput,
} from '@chakra-ui/react';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import { FiEdit3 } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { createCustomerStrategy } from 'apiSdk/customer-strategies';
import { Error } from 'components/error';
import { customerStrategyValidationSchema } from 'validationSchema/customer-strategies';
import { AsyncSelect } from 'components/async-select';
import { ArrayFormField } from 'components/array-form-field';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { UserInterface } from 'interfaces/user';
import { StrategyInterface } from 'interfaces/strategy';
import { getUsers } from 'apiSdk/users';
import { getStrategies } from 'apiSdk/strategies';
import { CustomerStrategyInterface } from 'interfaces/customer-strategy';

function CustomerStrategyCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: CustomerStrategyInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createCustomerStrategy(values);
      resetForm();
      router.push('/customer-strategies');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<CustomerStrategyInterface>({
    initialValues: {
      user_id: (router.query.user_id as string) ?? null,
      strategy_id: (router.query.strategy_id as string) ?? null,
    },
    validationSchema: customerStrategyValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout>
      <Box bg="white" p={4} rounded="md" shadow="md">
        <Box mb={4}>
          <Text as="h1" fontSize="2xl" fontWeight="bold">
            Create Customer Strategy
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <form onSubmit={formik.handleSubmit}>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.email}
              </option>
            )}
          />
          <AsyncSelect<StrategyInterface>
            formik={formik}
            name={'strategy_id'}
            label={'Select Strategy'}
            placeholder={'Select Strategy'}
            fetcher={getStrategies}
            renderOption={(record) => (
              <option key={record.id} value={record.id}>
                {record?.name}
              </option>
            )}
          />
          <Button isDisabled={formik?.isSubmitting} colorScheme="blue" type="submit" mr="4">
            Submit
          </Button>
        </form>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'customer_strategy',
    operation: AccessOperationEnum.CREATE,
  }),
)(CustomerStrategyCreatePage);
