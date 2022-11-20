import styled from 'styled-components';

export const STSearchBar = styled.div`
  display: flex;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.Iron};
  border-radius: 5px;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus-within {
    background-color: white;

    border-color: ${({ theme }) => theme.colors.PattensBlue};

    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;

export const STInputSearch = styled.input`
  display: block;

  width: 100%;

  padding: 5px 10px;

  line-height: 1.5;

  background-clip: padding-box;

  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  appearance: none;

  box-sizing: border-box;

  &:focus,
  &:focus-visible {
    outline: 0;
  }
`;

type STSubmitSearchProps = {
  disabled: boolean;
};

export const STSubmitSearch = styled.button<STSubmitSearchProps>`
  border: none;

  ${({ disabled }) => (!disabled ? 'cursor: pointer;' : '')}

  svg {
    display: flex;

    height: 20px;

    path {
      fill: ${({ theme }) => theme.colors.FriarGrey};
    }
  }
`;
