import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input type="name" placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Acessar</button>
        <Link to="/">Já tenho Login</Link>
      </form>
    </>
  );
}
