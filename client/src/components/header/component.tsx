import { CurrencySelect, LazySVG } from '@/components';
import { useIsMobileByWidth } from '@/hooks/use-is-mobile-by-width';
import {
  STCollapse,
  STHeader,
  STHeaderLogo,
  STHeaderLogoSvg,
  STLeftHeader
} from './style';

type Props = {
  isCollapsed: boolean;
  onMenuCollapse: () => void;
};

// ~~~~~~ Constants

const LogoSvg = LazySVG('logos/main-logo');

const LeftArrowSvg = LazySVG('icons/left-arrow');

const RightArrowSvg = LazySVG('icons/right-arrow');

const LogoLoaderSize = 48;

const CollapseIconLoaderSize = 35;

// ~~~~~~ Component

export const Header = ({ isCollapsed, onMenuCollapse }: Props) => {
  // ~~~~~~ Hooks

  const isMobile = useIsMobileByWidth();

  // ~~~~~~ Computed

  const CollapseIcon = isCollapsed ? RightArrowSvg : LeftArrowSvg;

  // ~~~~~~ Render

  return (
    <STHeader>
      <STHeaderLogo>
        <STHeaderLogoSvg>
          <LogoSvg size={LogoLoaderSize} />
        </STHeaderLogoSvg>

        {!isCollapsed && !isMobile ? 'BTC Explorer' : ''}

        {!isMobile ? (
          <STCollapse onClick={onMenuCollapse}>
            <CollapseIcon size={CollapseIconLoaderSize} />
          </STCollapse>
        ) : undefined}
      </STHeaderLogo>

      <STLeftHeader>
        <CurrencySelect />
      </STLeftHeader>
    </STHeader>
  );
};
