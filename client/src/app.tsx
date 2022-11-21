import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Header, NotificationAlert, Sidebar } from '@/components';
import { RoutesLink } from './constants/routes';
import { Addresses } from './pages/addresses/component';
import { Transactions } from './pages/transactions/component';
import { STApp, STNotificationContainer } from './style';
import { StoreState } from './store/reducers';

// ~~~~~~ Constants

const ROUTES_COMPONENTS = [
  {
    link: RoutesLink.Addresses,
    Component: Addresses
  },
  {
    link: RoutesLink.transactions,
    Component: Transactions
  }
];

// ~~~~~~ Component

function App() {
  // ~~~~~~ State

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  const { notificationHashes } = useSelector(
    (state: StoreState) => state.transaction
  );

  // ~~~~~~ Render

  return (
    <>
      <Header
        onMenuCollapse={() => setIsMenuCollapsed((prevState) => !prevState)}
        isCollapsed={isMenuCollapsed}
      />

      <STNotificationContainer>
        {notificationHashes?.map((transactionHash) => (
          <NotificationAlert transactionHash={transactionHash} />
        ))}
      </STNotificationContainer>

      <STApp>
        <Sidebar isCollapsed={isMenuCollapsed} />

        <Routes>
          {ROUTES_COMPONENTS.map(({ link, Component }) => (
            <Route key={link} path={link} element={<Component />} />
          ))}

          <Route path="*" element={<Navigate to={RoutesLink.Addresses} />} />
        </Routes>
      </STApp>
    </>
  );
}

export default App;
