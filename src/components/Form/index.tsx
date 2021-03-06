import React, { useState, FormEvent, useEffect } from 'react';

import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';

import { Container, FormDiv } from './styles';

interface Register {
  newName: string;
  newEmail: string;
}

const Form: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newName, setName] = useState('');
  const [newEmail, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [newRegister, setRegister] = useState<Register[]>(() => {
    const storageRegister = localStorage.getItem('@registerUser');
    if (storageRegister) {
      return JSON.parse(storageRegister);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@registerUser', JSON.stringify(newRegister));
  }, [newRegister]);

  const sendRecord = () =>
    ReactGA.event({
      category: 'User Registration',
      action: 'Send Form',
    });

  function handleRegister(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!newName || !newEmail) {
      setInputError('Digite o nome do contador.');
      return;
    }

    try {
      const UserRegister = {
        newName,
        newEmail,
      };

      setRegister([...newRegister, UserRegister]);
      setName('');
      setEmail('');
      setInputError('');
      sendRecord();
      return setRedirect(true);
    } catch (err) {
      setInputError('Digite o nome do contador.');
    }
  }

  useEffect(() => {
    ReactGA.initialize('UA-179277629-1');
    ReactGA.pageview('/');
  }, []);

  return redirect ? (
    <Redirect to="/thanks" />
  ) : (
    <Container>
      <h3>Fale agora com nossos consultores!</h3>
      <p>
        Conheça a Consultoria para Contadores e garanta uma vaga exclusiva na
        <strong> Imersão Nucont </strong>
      </p>
      <FormDiv hasError={!!inputError} onSubmit={handleRegister}>
        <input
          size={35}
          maxLength={35}
          value={newName}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
        />
        <input
          value={newEmail}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />

        <button onClick={sendRecord} type="submit">
          Quero acompanhar a série
        </button>
      </FormDiv>
    </Container>
  );
};

export default Form;
