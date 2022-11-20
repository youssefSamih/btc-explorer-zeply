import React from 'react';

import { LazySVG } from '@/components';
import {
  STHeader,
  STHeaderLogo,
  STHeaderLogoSvg,
  STHeaderNotification
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

      <STHeaderNotification>
        <NotificationSvg size={NotificationLoaderSize} />
      </STHeaderNotification>
    </STHeader>
  );
};
