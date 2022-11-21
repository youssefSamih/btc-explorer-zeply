import { useDispatch, useSelector } from 'react-redux';

import type { StoreState } from '@/store/reducers';
import { CurrencySelect, LazySVG } from '@/components';
import { STHeader, STHeaderLogo, STHeaderLogoSvg, STLeftHeader } from './style';
import { ApiTransactionInfoAC } from '@/store/actions/transaction-info/action';

// ~~~~~~ Constants

const LogoSvg = LazySVG('logos/main-logo');

const LogoLoaderSize = 48;

// ~~~~~~ Component

export const Header = () => {
  // ~~~~~~ Render

  return (
    <STHeader>
      <STHeaderLogo>
        <STHeaderLogoSvg>
          <LogoSvg size={LogoLoaderSize} />
        </STHeaderLogoSvg>
        BTC Explorer
      </STHeaderLogo>

      <STLeftHeader>
        <CurrencySelect />
      </STLeftHeader>
    </STHeader>
  );
};
