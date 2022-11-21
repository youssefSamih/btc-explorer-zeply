import styled from 'styled-components';

export const STHeader = styled.header`
  position: fixed;
  top: 0px;
  z-index: 10;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.GhostWhite};

  padding: 10px 40px 10px 10px;

  box-shadow: 0px 0px 20px 12px ${({ theme }) => theme.colors.Platinum};
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const STHeaderLogo = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.FriarGrey};

  ${({ theme }) => theme.fonts.scale.BigTitle}
`;

export const STHeaderLogoSvg = styled.span`
  display: inline-flex;

  width: 50px;
`;

export const STHeaderNotification = styled.div`
  display: inline-flex;

  width: 30px;

  border-radius: 40px;

  background-color: ${({ theme }) => theme.colors.Platinum};

  padding: 10px;
`;

export const STLeftHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const STCollapse = styled.div`
  display: flex;

  margin-left: 13px;

  cursor: pointer;

  svg {
    width: 30px;

    path {
      fill: ${({ theme }) => theme.colors.FriarGrey};
    }
  }
`;
