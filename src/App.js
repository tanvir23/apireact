import React, { Component } from 'react';
import { joinRoom } from 'clitehd-external-api';
import logo from './logo.svg';
import call from './call.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  handleOnClick(){
    // return createRoom('tanvir', 'fakeP@55');
    return joinRoom('tanvir');
  }

  render() {
    return (
      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button 
            onClick={this.handleOnClick}
            type="button">
            <img 
              src={call} 
              alt="call logo" />
            Receive call
          </button>
        </div>
    );
  }
}

export default App;
