import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const STSidebar = styled.aside`
  width: 280px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.GhostWhite};

  padding-top: 100px;
`;

export const STSidebarUl = styled.ul`
  margin: 0;
  padding: 0 10px;

  list-style: none;
`;

export const STSidebarItem = styled.li`
  padding-bottom: 10px;

  .active {
    background-color: ${({ theme }) => theme.colors.PattensBlue};
    color: ${({ theme }) => theme.colors.DarkCerulean};

    font-weight: 800;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.DarkCerulean};
      }
    }
  }
`;

export const STSidebarItemLink = styled(NavLink)`
  padding: 5px 15px 5px 10px;

  border-radius: 5px;

  text-decoration: none;
  line-height: 25px;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.RiverBed};
`;

export const STSidebarIcon = styled.span`
  display: inline-flex;

  height: 30px;

  margin-right: 20px;
`;
