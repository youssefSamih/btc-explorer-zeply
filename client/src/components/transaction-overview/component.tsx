import { useSelector } from 'react-redux';
import { FormattedNumber } from 'react-intl';

import { Box } from '@/components';
import { StoreState } from '@/store/reducers';
import { getCurrencyRate } from '@/utils/currency';
import { STLabelBox, STTransactionOverview } from './style';

// ~~~~~~ Component

export const TransactionOverview = () => {
  // ~~~~~~ State

  const { transactionSearch } = useSelector(
    (state: StoreState) => state.transaction
  );

  const { currencyRates, currency } = useSelector(
    (state: StoreState) => state.currency
  );

  // ~~~~~~ Render

  return (
    <STTransactionOverview data-test="transaction-overview">
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

      {transactionSearch?.data.inputs_value && currencyRates ? (
        <Box>
          <STLabelBox>Total BTC input</STLabelBox>

          <FormattedNumber
            value={getCurrencyRate(
              currencyRates.btc[currency.toLowerCase()],
              transactionSearch.data.inputs_value
            )}
            style="currency"
            currency={currency}
            minimumFractionDigits={0}
          />
        </Box>
      ) : undefined}

      {transactionSearch?.data.outputs_value && currencyRates ? (
        <Box>
          <STLabelBox>Total BTC output</STLabelBox>

          <FormattedNumber
            value={getCurrencyRate(
              currencyRates.btc[currency.toLowerCase()],
              transactionSearch?.data.outputs_value
            )}
            style="currency"
            currency={currency}
            minimumFractionDigits={0}
          />
        </Box>
      ) : undefined}

      {transactionSearch?.data.fee && currencyRates ? (
        <Box>
          <STLabelBox>Total Fees</STLabelBox>

          <FormattedNumber
            value={getCurrencyRate(
              currencyRates.btc[currency.toLowerCase()],
              transactionSearch.data.fee
            )}
            style="currency"
            currency={currency}
            minimumFractionDigits={0}
          />
        </Box>
      ) : undefined}
    </STTransactionOverview>
  );
};
