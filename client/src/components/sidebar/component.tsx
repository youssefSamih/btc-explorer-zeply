import React from 'react';
import Scrollbars from 'react-custom-scrollbars';

import { LazySVG } from '@/components';
import { RoutesLink } from '@/constants/routes';
import {
  STSidebar,
  STSidebarIcon,
  STSidebarItem,
  STSidebarItemLink,
  STSidebarUl
} from './style';

// ~~~~~~ Constants

const TransactionsIcon = LazySVG('icons/transactions');
const SearchAddressIcon = LazySVG('icons/search-address');

const LINK_SIDEBAR = [
  {
    link: RoutesLink.Addresses,
    label: 'Addresses',
    Icon: SearchAddressIcon
  },
  {
    link: RoutesLink.transactions,
    label: 'Transactions',
    Icon: TransactionsIcon
  }
];

const IconLoaderSize = 30;

// ~~~~~~ Component

export const Sidebar = () => {
  // ~~~~~~ Render

  return (
    <STSidebar>
      <Scrollbars>
        <STSidebarUl>
          {LINK_SIDEBAR.map(({ label, link, Icon }) => (
            <STSidebarItem key={link}>
              <STSidebarItemLink
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                to={link}
              >
                <STSidebarIcon>
                  <Icon size={IconLoaderSize} />
                </STSidebarIcon>
                {label}
              </STSidebarItemLink>
            </STSidebarItem>
          ))}
        </STSidebarUl>
      </Scrollbars>
    </STSidebar>
  );
};
