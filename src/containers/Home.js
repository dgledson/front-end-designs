import React, { useReducer } from 'react';
import logo from '../logo.svg';
import { Main, Header, Logo, Link, PrimaryButton } from '../components/App';
import collections from '../redux/reducers/collections';
import constants from '../redux/actionTypes/collections';

export default () => {
  const [state, dispatch] = useReducer(collections);

  const getCollections = () => {
    console.log(state);
    dispatch({ type: constants.GET_COLLECTIONS });
  };

  return (
    <Main>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </Link>
        <PrimaryButton onClick={getCollections}>Clique em mim</PrimaryButton>
      </Header>
    </Main>
  );
};
