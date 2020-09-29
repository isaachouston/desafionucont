import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 341px;

  h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 16px;
    text-align: center;
    color: #ffe200;
  }
  p {
    font-size: 15px;
    line-height: 16px;
    text-align: center;
    color: #fff;
    margin-bottom: 5px;
    padding: 7px 20px 7px 20px;
  }
`;

export const FormDiv = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  input {
    height: 35.16px;
    width: 328px;
    margin-bottom: 6.21px;
    background: #ffffff;
    border: 2px solid #99b6cc;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 8px;

    ${(props) =>
      props.hasError &&
      css`
        border: 2px solid #c53030;
      `}

    &::placeholder {
      font-family: Montserrat;
      font-size: 15px;
      line-height: 16px;
      color: #5c7e99;
      padding-left: 8px;
    }
  }

  button {
    height: 35.16px;
    width: 328px;
    margin-top: 18px;
    background: #ffb700;
    border: 0;
    border-radius: 42px;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    transition: background-color 0.6s ease-in-out;
    &:hover {
      background: ${shade(0.6, '#ffb700')};
    }
  }
`;
