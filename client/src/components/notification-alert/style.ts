import styled from 'styled-components';

export const STNotificationAlert = styled.div`
  padding: 20px;
  margin: auto;
  margin-top: 10px;

  background-color: #04aa6d;
  color: white;

  position: absolute;
  z-index: 10;
  left: 20px;
  right: 20px;

  width: fit-content;

  border-radius: 5px;
`;

export const STNotificationAlertCloseBtn = styled.span`
  color: white;

  margin-left: 15px;
  float: right;

  cursor: pointer;
  transition: 0.3s;
`;
