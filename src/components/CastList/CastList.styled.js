import styled from '@emotion/styled';

export const CastWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  padding-left: 40px;
`;

export const CastItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  color: inherit;
  width: 320px;
  padding: 10px;
  padding-left: 15px;
  border-radius: 3px;
  box-shadow: 1px 2px rgb(190, 190, 190);
`;

export const CastImg = styled.img`
  display: block;
  max-width: 80px;
  height: 100%;
`;

export const CastInfo = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 18px;
  margin: 0;
`;
