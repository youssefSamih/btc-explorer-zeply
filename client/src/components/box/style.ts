import styled from 'styled-components';

export const STBox = styled.div`
  background-color: white;
  background-clip: border-box;

  border: 1px solid rgba(0, 0, 0, 0.175);
  border-radius: 3px;

  padding: 20px;

  box-shadow: 0 0.46875rem 2.1875rem ${({ theme }) => theme.colors.Platinum};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  break-inside: avoid;

  margin-bottom: 12px;

  overflow-wrap: anywhere;
`;
