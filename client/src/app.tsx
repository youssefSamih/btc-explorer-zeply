import { Navigate, Route, Routes } from 'react-router-dom';

import { Header, NotificationAlert, Sidebar } from '@/components';
import { RoutesLink } from './constants/routes';
import { Addresses } from './pages/addresses/component';
import { Transactions } from './pages/transactions/component';
import { STApp, STNotificationContainer } from './style';
import { useSelector } from 'react-redux';
import { StoreState } from './store/reducers';

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

function App() {
  const { notificationHashes } = useSelector(
    (state: StoreState) => state.transaction
  );
  return (
    <>
      <Header />

      <STNotificationContainer>
        {notificationHashes?.map((transactionHash) => (
          <NotificationAlert transactionHash={transactionHash} />
        ))}
      </STNotificationContainer>

      <STApp>
        <Sidebar />

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
