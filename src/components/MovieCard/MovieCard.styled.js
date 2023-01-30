import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ButtonGoBack = styled(Link)`
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

export const CardWrapper = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px;
  padding-left: 40px;
`;

export const Poster = styled.img`
  display: block;
  max-width: 220px;
  height: 100%;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 40px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Subtitle = styled.h2`
  color: inherit;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  padding-top: 5px;
  margin: 0;
`;

export const AddInfo = styled.h2`
  color: inherit;
  margin: 0;
  padding-left: 40px;
`;
