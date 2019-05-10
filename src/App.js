import React from 'react';
import './App.css';
import {UserInput} from './userInput.js';
import {UserOutput} from './userOutput.js';




export default class App extends React.Component {
  constructor(props){
    super(props);
    
  }
  render() {    
    return(
    <div className="App">
    <UserInput/>
    <UserOutput/>
    </div>
    );
    
  }
    
    
  }
