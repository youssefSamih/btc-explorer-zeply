import { CurrencySelect, LazySVG } from '@/components';
import {
  STHeader,
  STHeaderLogo,
  STHeaderLogoSvg,
  STHeaderNotification,
  STLeftHeader
} from './style';

// ~~~~~~ Constants

const LogoSvg = LazySVG('logos/main-logo');
const NotificationSvg = LazySVG('icons/notification');

const LogoLoaderSize = 48;
const NotificationLoaderSize = 30;

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

        <STHeaderNotification>
          <NotificationSvg size={NotificationLoaderSize} />
        </STHeaderNotification>
      </STLeftHeader>
    </STHeader>
  );
};
