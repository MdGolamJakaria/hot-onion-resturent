import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Compunents/Header/Header'
import Cart from './Compunents/Cart/Cart';
import Login from './Compunents/Login/Login';
import Signup from './Compunents/Signup/Signup'
import Home from './Compunents/Home/Home';

export const cetagoryContext = createContext()

function App() {

  const [cetagory, setCetagory] = useState('breakfast')

  return (
    <cetagoryContext.Provider value={[cetagory, setCetagory]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/cart'>
            <Cart></Cart>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
        </Switch>
      </Router>

    </cetagoryContext.Provider>
  );
}

export default App;
