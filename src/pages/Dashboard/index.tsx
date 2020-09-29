import React from 'react';

import ReactGA from 'react-ga';

import EllipseColum from '../../components/Ellipse';
import Form from '../../components/Form';
import FerPerfilImg from '../../assets/ferperfil.png';

import {
  Container,
  HeaderContent,
  MiddleContent,
  MainContent,
  Ellipse,
  AboutFer,
  SizeDiv,
  SizeForm,
  ConsultingDiv,
  FooterDiv,
} from './styles';

const sendRecord = () =>
  ReactGA.event({
    category: 'Consultancy',
    action: 'Send Form',
  });

const Dashboard: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <SizeDiv>
          <h1>Consultoria contábil na prática</h1>
          <p className="header">
            <strong>Identifique</strong> situações problemáticas nas empresas
            através de análise de indicadores e entenda como fazer uma
            consultoria contábil eficiente. Seja o responsável por ajudar as
            pequenas empresas a se recuperarem dos impactos gerados pela crise
            econômica, aplicando a contabilidade como ciência.
          </p>
          <span>com Fernanda Rocha - CEO da Nucont</span>
        </SizeDiv>
        <SizeForm>
          <Form />
        </SizeForm>
      </HeaderContent>
      <MiddleContent>
        <h2>Como ser essencial na tomada de decisão das empresas?</h2>
        <p>
          Responder essa pergunta <strong>pode ser mais fácil</strong> do que
          parece: A Consultoria Contábil é sua aliada para analisar a real
          situação das empresas. No entanto, para colocar em prática, você
          precisa de informações e dedicação.
        </p>
        <h4>Vamos conversar a respeito?</h4>
        <button type="submit" onClick={sendRecord}>
          Quero assistir a série: consultoria contábil na prática
        </button>
      </MiddleContent>
      <MainContent>
        <h2>Esse série é pra você contador:</h2>
        <ul>
          <li>
            <Ellipse />
            Que quer ter processos contábeis ágeis
          </li>
          <li>
            <Ellipse />
            Que quer aumentar o valor percebido pelo seu cliente e ajudá-lo na
            tomada de decisão
          </li>
          <li>
            <Ellipse />
            Que deseja ver na prática como aplicar uma consultoria contábil
            eficaz e com método claro
          </li>
        </ul>
        <EllipseColum />
        <h2>O que será abordado na série:</h2>
        <ul>
          <li>
            <Ellipse />
            Análises de indicadores de empresas reais no contexto atual
          </li>
          <li>
            <Ellipse />
            Doenças financeiras como insolvência, undertrading e excesso de
            endividamento
          </li>
          <li>
            <Ellipse />
            Metodologia científica para aplicação de consultoria contábil
          </li>
          <li>
            <Ellipse />
            Pesquisas e comparativos de mercado para entender o contexto das
            pequenas empresas na pandemia
          </li>
        </ul>
        <EllipseColum />
        <AboutFer>
          <h2>Quem é fernanda rocha?</h2>
          <div className="AboutFerDiv">
            <div>
              <img src={FerPerfilImg} alt="Foto de perfil de Fernanda" />
            </div>
            <div>
              <h3>Fala galera, beleza? </h3>
              <p>
                Eu sou a Fernanda Rocha,{' '}
                <span>
                  fundadora da Nucont e do Movimento Contabilidade Sem Chatice.
                </span>{' '}
                Como empresária contábil eu já estive no fundo do poço, a ponto
                de largar tudo. Até que através da Contabilidade Consultiva me
                reergui e achei uma maneira de entregar mais valor para as
                empresas e com isso fui mais valorizada.{' '}
                <span>Cansada de ser tratada como mal necessário,</span> decidi
                fazer diferente. Corri atrás e resolvi encarar de frente o
                desafio de aplicar na prática a verdadeira contabilidade. Não
                foi fácil, muitas vezes me decepcionei, mas{' '}
                <span>
                  me coloquei na missão de mudar para sempre a forma com que
                  Contadores e Empresas se relacionam.
                </span>{' '}
                Hoje tenho um compromisso com a classe contábil de replicar tudo
                o que eu aprendi nessa jornada e garantir que o contador salve
                empresas e ajude os empresários na tomada de decisões. Vem
                comigo!
              </p>
            </div>
          </div>
        </AboutFer>
        <EllipseColum />
        <ConsultingDiv>
          <p className="textConsulting">
            A Consultoria Contábil na Prática é um série de vídeo gratuita. Será
            realizada durante o mês de Julho e para ter acesso exclusivo,
            preencha o formulário ao lado!
          </p>
          <div className="divForm">
            <Form />
          </div>
        </ConsultingDiv>
        <EllipseColum />
        <FooterDiv>
          <h2>Estamos juntos nessa</h2>
        </FooterDiv>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
