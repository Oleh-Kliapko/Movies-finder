import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';

export const ButtonGoBack = ({ to, children }) => {
  return <ButtonStyles to={to}>{children}</ButtonStyles>;
};

export const ButtonStyles = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  color: inherit;
  background-color: rgb(230, 230, 230);

  width: 120px;
  margin-top: 5px;
  margin-left: 40px;
  padding: 5px 10px;

  border-radius: 4px;
  border: none;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgb(210, 210, 210);
  }
`;

export const AddInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-left: 40px;
  margin-top: 10px;
`;

export const InfoItem = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  color: inherit;
  background-color: rgb(230, 230, 230);
  padding: 5px 10px;
  width: 100px;
  margin: 0;

  border-radius: 4px;
  border: none;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: rgb(210, 210, 210);
  }
`;
