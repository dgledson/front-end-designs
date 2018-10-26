import React from 'react';
import logo from '../logo.svg';
import { Main, Header, Logo, Link } from '../components/App';

export default () => (
  <Main>
    <Header>
      <Logo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </Link>
    </Header>
  </Main>
);
