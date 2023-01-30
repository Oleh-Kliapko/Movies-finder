import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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
