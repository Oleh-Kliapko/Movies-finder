import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-left: 40px;
`;

export const HomeTitle = styled.h1`
  margin: 0;
`;

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const MovieItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  width: 400px;
  padding: 10px;
  padding-left: 15px;
  background-color: rgb(240, 240, 240);
  border-radius: 3px;
  box-shadow: 1px 2px rgb(190, 190, 190);

  &:hover,
  &:focus {
    color: tomato;
    background-color: rgb(230, 230, 230);
    box-shadow: 2px 3px rgb(170, 170, 170);
  }
`;

export const MovieImg = styled.img`
  display: block;
  max-width: 120px;
  height: auto;
`;
