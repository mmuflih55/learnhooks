import React from 'react';
import Reducer from './Reducer'
import { CookiesProvider } from 'react-cookie';
import './App.css';
import Route from './Route';
import {UserContext} from './Context'

const App = () => {
  const { state, dispatch } = Reducer();

  return (
    <CookiesProvider>
      <UserContext.Provider value={{ state, dispatch }}>
        <Route/>
      </UserContext.Provider>
    </CookiesProvider>
  );
}

export default App;
