import { useSelector } from 'react-redux';
import { FormattedNumber } from 'react-intl';

import { Box } from '@/components';
import { StoreState } from '@/store/reducers';
import { STLabelBox, STTransactionOverview } from './style';

// ~~~~~~ Component

export const TransactionOverview = () => {
  // ~~~~~~ State

  const { transactionSearch } = useSelector(
    (state: StoreState) => state.transaction
  );

  // ~~~~~~ Render

  return (
    <STTransactionOverview>
      {transactionSearch?.data.hash ? (
        <Box>
          <STLabelBox>Transaction hash</STLabelBox>

          {transactionSearch.data.hash}
        </Box>
      ) : undefined}

      {transactionSearch?.data.block_time ? (
        <Box>
          <STLabelBox>Received time</STLabelBox>

          {new Date(transactionSearch?.data.block_time).toLocaleTimeString()}
        </Box>
      ) : undefined}

      {transactionSearch?.status ? (
        <Box>
          <STLabelBox>Status</STLabelBox>

          {transactionSearch?.status}
        </Box>
      ) : undefined}

      {transactionSearch?.data.size ? (
        <Box>
          <STLabelBox>Size</STLabelBox>

          {transactionSearch?.data.size}
        </Box>
      ) : undefined}

      {transactionSearch?.data.confirmations ? (
        <Box>
          <STLabelBox>Number of confirmations</STLabelBox>

          {transactionSearch?.data.confirmations}
        </Box>
      ) : undefined}

      {transactionSearch?.data.inputs_value ? (
        <Box>
          <STLabelBox>Total BTC input</STLabelBox>

          <FormattedNumber
            value={transactionSearch?.data.inputs_value}
            style="currency"
            currency="BTC"
            minimumFractionDigits={0}
            currencyDisplay="name"
          />
        </Box>
      ) : undefined}

      {transactionSearch?.data.outputs_value ? (
        <Box>
          <STLabelBox>Total BTC output</STLabelBox>

          <FormattedNumber
            value={transactionSearch?.data.outputs_value}
            style="currency"
            currency="BTC"
            minimumFractionDigits={0}
            currencyDisplay="name"
          />
        </Box>
      ) : undefined}

      {transactionSearch?.data.fee ? (
        <Box>
          <STLabelBox>Total Fees</STLabelBox>

          <FormattedNumber
            value={transactionSearch?.data.fee}
            style="currency"
            currency="BTC"
            minimumFractionDigits={0}
            currencyDisplay="name"
          />
        </Box>
      ) : undefined}
    </STTransactionOverview>
  );
};
