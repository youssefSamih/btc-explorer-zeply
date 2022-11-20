import styled from 'styled-components';

export const STCard = styled.div`
  background-color: white;
  background-clip: border-box;

  border: 1px solid rgba(0, 0, 0, 0.175);
  border-radius: 3px;

  padding: 12px;

  box-shadow: 0 0.46875rem 2.1875rem ${({ theme }) => theme.colors.Platinum},
    0 0.9375rem 1.40625rem ${({ theme }) => theme.colors.Platinum},
    0 0.25rem 0.53125rem ${({ theme }) => theme.colors.Platinum},
    0 0.125rem 0.1875rem ${({ theme }) => theme.colors.Platinum};
`;
