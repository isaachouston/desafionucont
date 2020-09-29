import styled from 'styled-components';
import { shade } from 'polished';

import ferbanner from '../../assets/ferbanner.png';

export const Container = styled.div`
  font-family: Montserrat, Open Sans, sans-serif;
  margin: auto;
`;

export const ThanksHeader = styled.header`
  display: flex;
  justify-content: space-around;
  background: url(${ferbanner});
  background-size: cover;

  border-bottom: 10px solid #ffe200;

  @media (max-width: 800px) {
    border: 0;
  }

  div {
    width: 37%;
    margin: 170px 0 120px 0;

    @media (max-width: 800px) {
      width: 60%;
      margin: 170px 0 120px 0;
    }

    h1 {
      font-weight: bold;
      font-size: 29px;
      line-height: 35px;
      color: #ffe200;
      text-transform: uppercase;
      margin-bottom: 38px;
      @media (max-width: 800px) {
        font-size: 24px;
        line-height: 29px;
      }
    }
    p.header {
      font-size: 18px;
      line-height: 22px;
      color: #fff;
      margin-bottom: 25px;
    }
    span {
      font-size: 14px;
      line-height: 17px;
      color: #fff;
      @media (max-width: 800px) {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
`;
export const ThanksMidlle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;

  @media (max-width: 800px) {
    display: none;
  }

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #063254;
    width: 70%;
    margin: 58px 0 64px 0;
  }
  button {
    width: 264px;
    height: 41px;
    border: 0;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 18px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    background: linear-gradient(180deg, #ffb700 99.99%, #141414 100%);
    border-radius: 31px;
    text-transform: uppercase;
    margin-bottom: 59px;
    transition: background-color 0.6s ease-in-out;
    &:hover {
      background: ${shade(0.6, '#ffb700')};
    }
  }
`;
export const ThanksFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #ffb700 99.99%, #141414 100%);
  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #063254;
    width: 70%;
    margin: 58px 0 64px 0;
    @media (max-width: 800px) {
      margin: 58px 0 0 0;
    }
  }
`;

export const TelegramDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: auto;
    height: auto;
    padding: 10px 25px;
    border: 0;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #ffffff;
    background: #9b51e0;
    border-radius: 31px;
    text-transform: uppercase;
    margin: 53px 0 53px -70px;
    transition: background-color 0.6s ease-in-out;
    &:hover {
      background: ${shade(0.6, '#ffb700')};
    }
    @media (max-width: 800px) {
      width: 70%;
      margin: 53px 0 53px -80px;
    }
  }
  img {
    width: 170px;
    height: 120px;
    z-index: 1;
    @media (max-width: 800px) {
      margin-left: -30px;
    }
  }
`;
