import { useState } from 'react';

import { STNotificationAlert, STNotificationAlertCloseBtn } from './style';

// ~~~~~~ Types

type Props = {
  transactionHash: string;
};

// ~~~~~~ Component

export const NotificationAlert = ({ transactionHash }: Props) => {
  // ~~~~~~ State

  const [displayAlert, setDisplayAlert] = useState(true);

  // ~~~~~~ Render

  return displayAlert ? (
    <STNotificationAlert>
      <STNotificationAlertCloseBtn onClick={() => setDisplayAlert(false)}>
        &times;
      </STNotificationAlertCloseBtn>
      <strong>New Transaction!</strong> {transactionHash}
    </STNotificationAlert>
  ) : null;
};
