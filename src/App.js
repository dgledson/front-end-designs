import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './containers/Counter';
import { Main, Header, Logo, Link } from './components/App';
import './App.css';

class App extends Component {
  render() {
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
          <Counter />
        </Header>
      </Main>
    );
  }
}

export default App;
