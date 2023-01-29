import styled from '@emotion/styled';

export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;

export const HomeTitle = styled.h1`
  padding-left: 40px;
  margin: 0;
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  list-style: none;
`;

export const MovieItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  cursor: pointer;
  width: 400px;
  padding: 10px;
  padding-left: 15px;
  background-color: rgb(240, 240, 240);
  border-radius: 3px;
  box-shadow: 1px 2px rgb(190, 190, 190);
`;

export const MovieImg = styled.img`
  display: block;
  max-width: 120px;
  height: auto;
`;
