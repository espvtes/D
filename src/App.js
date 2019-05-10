import React from 'react';
import './App.css';
import {UserInput} from './userInput.js';
import UserOutput from './userOutput.js';




export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      UserOutput:[
        {name: 'Marcos', age:33},
        {name: 'Sofia', age:40}
      ]
    }
  }
  render() {    
    return(
    <div className="App">
    <UserInput />
    <UserOutput 
    name={this.state.UserOutput[0].name} 
    age={this.state.UserOutput[0].age}/>
    </div>
    );
    
  }
    
    
  }
