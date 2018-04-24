import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Startpage from './Startpage';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: 'Pomodoro timer'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
          <Route exact path="/" component={Startpage}/>
        </header>
      </div>
    );
  }
}

export default App;
