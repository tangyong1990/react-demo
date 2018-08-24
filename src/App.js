import React, { Component } from 'react';
import { HashRouter as Router,Route} from 'react-router-dom';
import store from "./store/store.js";
import { Provider } from "react-redux";
import Main from './main/main.js';
import Play from './play/play.js';
import Reg from './reg/reg.js';
import Login from './login/login.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
       <div>
         <Route path='/found' component={Main}/>
         <Route path='/play' component={Play}/>
         <Route path='/reg' component={Reg}/>
         <Route exact path='/' component={Login}/>
       </div>
     </Router>
      </Provider>
    );
  }
}

export default App;
