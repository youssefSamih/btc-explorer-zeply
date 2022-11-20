import { useSelector } from 'react-redux';
import { FormattedNumber } from 'react-intl';

import { Box } from '@/components';
import { StoreState } from '@/store/reducers';
import { STLabelBox, STAddressOverview } from './style';
import { getCurrencyRate } from '@/utils/currency';

// ~~~~~~ Component

export const AddressOverview = () => {
  // ~~~~~~ State

  const { addressSearch } = useSelector((state: StoreState) => state.address);
  const { currency, currencyRates } = useSelector(
    (state: StoreState) => state.currency
  );

  // ~~~~~~ Render

  return (
    <STAddressOverview>
      {addressSearch?.data.received && currencyRates ? (
        <Box>
          <STLabelBox>Total BTC received</STLabelBox>

          <FormattedNumber
            value={getCurrencyRate(
              currencyRates.btc[currency.toLowerCase()],
              addressSearch.data.received
            )}
            style="currency"
            currency={currency}
            minimumFractionDigits={0}
          />
        </Box>
      ) : undefined}

      {addressSearch?.data.sent && currencyRates ? (
        <Box>
          <STLabelBox>Total BTC spent</STLabelBox>

          <FormattedNumber
            value={getCurrencyRate(
              currencyRates.btc[currency.toLowerCase()],
              addressSearch.data.sent
            )}
            style="currency"
            currency={currency}
            minimumFractionDigits={0}
          />
        </Box>
      ) : undefined}

      {addressSearch?.data.tx_count ? (
        <Box>
          <STLabelBox>Number of confirmed transactions</STLabelBox>

          {addressSearch.data.tx_count}
        </Box>
      ) : undefined}

      {addressSearch?.data.balance && currencyRates ? (
        <Box>
          <STLabelBox>Current address balance</STLabelBox>

          <FormattedNumber
            value={getCurrencyRate(
              currencyRates.btc[currency.toLowerCase()],
              addressSearch.data.balance
            )}
            style="currency"
            currency={currency}
            minimumFractionDigits={0}
          />
        </Box>
      ) : undefined}

      {addressSearch?.data.unspent_tx_count ? (
        <Box>
          <STLabelBox>Total BTC unspent</STLabelBox>

          {addressSearch.data.unspent_tx_count}
        </Box>
      ) : undefined}
    </STAddressOverview>
  );
};
