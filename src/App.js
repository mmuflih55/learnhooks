import React,{ useContext,useReducer } from 'react';
import Reducer from './Reducer'
import './App.css';
const UserContext = React.createContext({});

const Header = ()=>{
  const con = useContext(UserContext)
  const handleChange = (v)=>{
    let val = v.target.value;
    con.dispatch({type:'gantinama',val:val})
  }
  return(
    <div>
      <input type="text" onChange={handleChange}></input>
      Ini Header {con.state.profile.name}
      {/* Ini Header {JSON.stringify(con)} */}
    </div>
  )
}

const Footer = ()=>{
  const con = useContext(UserContext)

  return(
    <div>
      Ini Footer {con.state.profile.name}
    </div>
  )
}

const App = () => {
  const {state,dispatch} = Reducer();

  return (
    <UserContext.Provider value={{state,dispatch}}>
      <Header/>
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
  );
}

export default App;
