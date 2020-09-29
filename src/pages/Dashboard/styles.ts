import styled from 'styled-components';
import { shade } from 'polished';

import ferbanner from '../../assets/ferbanner.png';

export const Container = styled.div`
  font-family: Montserrat, Open Sans, Arial;
  width: 100%;
`;
export const HeaderContent = styled.div`
  background: url(${ferbanner});
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  min-height: 550px;
  height: 100vh;


    @media (max-width: 800px) {
      flex-direction: column;
      height: 100%;

    }
  }
`;

export const SizeDiv = styled.div`
  width: 50%;
  margin-left: 11%;
  padding: 30px 0px 0 50px;
  @media (max-width: 800px) {
    width: 70%;
    margin: 0 10% 0 12%;
    padding: 30px 0px 0 30px;
  }

  h1 {
    font-weight: bold;
    font-size: 29px;
    line-height: 35px;
    color: #ffe200;
    text-transform: uppercase;
  }
  p.header {
    font-size: 18px;
    line-height: 22px;
    color: #fff;
    padding: 38px 70px 125px 0;

    @media (max-width: 800px) {
      font-size: 13px;
      line-height: 16px;
      padding: 27px 0px 59px 0;
    }
  }
  span {
    margin: auto;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
    @media (max-width: 800px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

export const SizeForm = styled.div`
  width: 28%;
  margin-bottom: 65px;
  @media (max-width: 800px) {
    margin-top: 59px;
    width: 100%;
  }
`;

export const MiddleContent = styled.div`
  background: linear-gradient(180deg, #ffb700 99.99%, #141414 100%);
  display: flex;
  flex-direction: column;
  h2 {
    width: 80%;
    margin: auto;
    padding-top: 20px;
    font-weight: bold;
    font-size: 29px;
    line-height: 35px;
    text-align: center;
    color: #063254;
    text-transform: uppercase;
    @media (max-width: 800px) {
      font-size: 24px;
      line-height: 29px;
    }
  }
  p {
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    text-align: center;
    font-family: Montserrat;
    margin: 20px 241px 16px 242px;
    @media (max-width: 800px) {
      font-size: 18px;
      line-height: 22px;
      margin: 1% 15%;
    }
  }
  h4 {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }

  button {
    background: #9b51e0;
    border-radius: 52px;
    border: 0;
    color: #fff;
    font-family: Open Sans, Montserrat, sans-serif;
    font-size: 16px;
    font-weight: bold;
    margin: 5% auto;
    padding: 11px;
    text-align: center;
    text-transform: uppercase;
    transition: background-color 0.6s ease-in-out;
    &:hover {
      background: ${shade(0.6, '#9b51e0')};
    }

    @media (max-width: 800px) {
      font-size: 16px;
      line-height: 16px;
      margin: 5% 4%;
    }
  }
`;

export const MainContent = styled.div`
  width: 72%;
  margin: auto;
  h2 {
    padding-top: 37px;
    font-weight: bold;
    font-size: 29px;
    line-height: 35px;
    color: #063254;
    text-transform: uppercase;
    margin-bottom: 37px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      list-style: none;

      font-size: 18px;
      line-height: 22px;
      color: #063254;
      @media (max-width: 800px) {
        font-size: 14px;
        line-height: 17px;
      }
    }
  }
`;

export const Ellipse = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #ffb700;
  margin: -2px 10px 25px 0;
  float: left;
`;

export const AboutFer = styled.div`
  .AboutFerDiv {
    display: flex;
    @media (max-width: 800px) {
      flex-direction: column;
      margin-top: 21px;
    }
  }

  img {
    width: 296px;
    height: 262px;
  }
  h2 {
    font-weight: bold;
    font-size: 29px;
    line-height: 35px;
    text-transform: uppercase;
    color: #ffb700;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 17px;
      line-height: 21px;
    }
  }

  p {
    font-size: 16px;
    line-height: 143.4%;
    margin-left: 28px;
    span {
      color: #ffb700;
    }

    @media (max-width: 800px) {
      font-size: 10px;
      line-height: 143.4%;
      margin: 0;
    }
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    line-height: 143.4%;
    margin-left: 28px;
    color: #ffb700;
    @media (max-width: 800px) {
      font-size: 10px;
      margin-left: 0px;
    }
  }
`;

export const ConsultingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 80px 0;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0;
  }

  div {
  }
  p.textConsulting {
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    padding: 90px 120px 90px 10px;
    @media (max-width: 800px) {
      font-size: 14px;
      line-height: 17px;
      padding: 47px 0 33px 0;
    }
  }
  p {
    color: #063254;
  }

  .divForm {
    min-width: 341px;
  }
`;
export const FooterDiv = styled.footer`
  margin-bottom: 150px;

  h2 {
    font-weight: bold;
    font-size: 29px;
    line-height: 35px;
    text-transform: uppercase;
    color: #ffb700;
    text-align: center;

    @media (max-width: 800px) {
      font-size: 17px;
      line-height: 21px;
    }
  }
`;
