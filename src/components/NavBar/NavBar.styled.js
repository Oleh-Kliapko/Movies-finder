import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 40px;
  gap: 40px;
  width: 100vw;
  background-color: #aeb7ec;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.04),
    0 1px 10px 0 rgba(0, 0, 0, 0.02);
`;

export const NavBarItem = styled(NavLink)`
  font-size: 36px;
  display: block;
  text-decoration: none;

  &.active {
    color: tomato;
    border-bottom: 2px solid tomato;
  }
`;
