import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;

  padding: 20px 10px 20px 40px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const BtnAddContact = styled.button`
  background-color: mediumseagreen;
  padding: 3px;
  border: outset;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;
