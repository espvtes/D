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
  switchNameHandler = newName =>{
    this.setState={
      UserOutput:[
        {name: 'newName', age:33},
        {name: 'Sofia', age:40}
      ]
    }
  }
  render() {    
    return(
    <div className="App">
    <h1>Real App is working!!!</h1>
    <p>The  best practices:</p>
    <button onClick={()=>this.switchNameHandler('John')}>Switch your Name</button>
    <UserInput />
    <UserOutput 
    name={this.state.UserOutput[0].name} 
    age={this.state.UserOutput[0].age}/>
    
    <UserOutput name='Joseph' age='23'/>
    </div>
    );
    
  }
    
    
  }
