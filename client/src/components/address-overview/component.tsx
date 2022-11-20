import { useSelector } from 'react-redux';
import { FormattedNumber } from 'react-intl';

import { Box } from '@/components';
import { StoreState } from '@/store/reducers';
import { STLabelBox, STAddressOverview } from './style';

// ~~~~~~ Component

export const AddressOverview = () => {
  // ~~~~~~ State

  const { addressSearch } = useSelector((state: StoreState) => state.address);

  // ~~~~~~ Render

  return (
    <STAddressOverview>
      {addressSearch?.data.received ? (
        <Box>
          <STLabelBox>Total BTC received</STLabelBox>

          <FormattedNumber
            value={addressSearch.data.received}
            style="currency"
            currency="BTC"
            minimumFractionDigits={0}
            currencyDisplay="name"
          />
        </Box>
      ) : undefined}

      {addressSearch?.data.sent ? (
        <Box>
          <STLabelBox>Total BTC spent</STLabelBox>

          <FormattedNumber
            value={addressSearch.data.sent}
            style="currency"
            currency="BTC"
            minimumFractionDigits={0}
            currencyDisplay="name"
          />
        </Box>
      ) : undefined}

      {addressSearch?.data.tx_count ? (
        <Box>
          <STLabelBox>Number of confirmed transactions</STLabelBox>

          {addressSearch.data.tx_count}
        </Box>
      ) : undefined}

      {addressSearch?.data.balance ? (
        <Box>
          <STLabelBox>Current address balance</STLabelBox>

          <FormattedNumber
            value={addressSearch.data.balance}
            style="currency"
            currency="BTC"
            minimumFractionDigits={0}
            currencyDisplay="name"
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
