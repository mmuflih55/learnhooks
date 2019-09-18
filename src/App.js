import React from 'react';
import Reducer from './Reducer'
import { CookiesProvider } from 'react-cookie';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {UserContext} from './Context'

const App = () => {
  const { state, dispatch } = Reducer();

  return (
    <CookiesProvider>
      <UserContext.Provider value={{ state, dispatch }}>
        <Header />
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <Footer />
      </UserContext.Provider>
    </CookiesProvider>
  );
}

export default App;
