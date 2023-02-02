import styled from '@emotion/styled';

export const SearchbarWrapper = styled.section`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 2;
  display: flex;
  align-items: center;
  min-height: 36px;
  padding: 12px 24px;
  padding-left: 40px;
  color: '#fff';
  background-color: rgb(240, 240, 240);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
  background-color: '#fff';
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 1px solid;
  border-color: rgb(190, 190, 190);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 24px;
  border: none;
  outline: none;
  padding: 10px;
  &::placeholder {
    font: inherit;
    font-size: 20px;
  }
`;
