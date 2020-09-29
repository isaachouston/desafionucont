import React from 'react';

import ReactGA from 'react-ga';

import {
  Container,
  ThanksHeader,
  ThanksMidlle,
  ThanksFooter,
  TelegramDiv,
} from './styles';
import TelegramImg from '../../assets/telegram.png';

const sendConsultant = () =>
  ReactGA.event({
    category: 'Talk to the consultant',
    action: 'Send Form',
  });

const sendTelegram = () =>
  ReactGA.event({
    category: 'Telegram',
    action: 'Send Form',
  });

const Thanks: React.FC = () => {
  return (
    <Container>
      <ThanksHeader>
        <div>
          <h1>Obrigado!</h1>
          <p className="header">
            <strong>Fique ligado!</strong> Você receberá em alguns instantes um
            e-mail da Fernanda Rocha com o acesso para acompanhar a série. toda
            semana vamos enviar o link da Consultoria Contábil com o tema que
            será abordado
          </p>
          <span>
            Por favor, confira também a aba de promoções e sua caixa de spam ou
            lixo eletrônico, em alguns casos o e-mail chega nessas outras
            caixas.
          </span>
        </div>
      </ThanksHeader>
      <ThanksMidlle>
        <p>
          A Nucont se sente responsável por te ajudar não só com estratégias e
          ações de emergência, mas também para te deixar preparado para um novo
          normal que viveremos. Conheça o Plano de retomada!
        </p>
        <button type="submit" onClick={sendConsultant}>
          Falar com Consultor
        </button>
      </ThanksMidlle>

      <ThanksFooter>
        <p>
          Quer fazer parte do canal oficial da nucont com nóticias, dicas e
          conteúdos exclusivos voltados a contabilidade consultiva?
        </p>
        <TelegramDiv>
          <img src={TelegramImg} alt="Logo telegram" />
          <button type="submit" onClick={sendTelegram}>
            Conecte-se com a gente: telegram
          </button>
        </TelegramDiv>
      </ThanksFooter>
    </Container>
  );
};

export default Thanks;
