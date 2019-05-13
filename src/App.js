import React from 'react';
import './App.css';
import UserInput from './userInput.js';
import UserOutput from './userOutput.js';




export default class App extends React.Component {
  state={
    userName:"supermax"
  }
  userNameChangeHandler= (event) =>{
    this.setState({
      userName: event.target.value
    });
  }
  render() {    
    return(
    <div className="App">
    <h1>Real App is working!!!</h1>
    <p>The  best practices:</p>
    <button onClick={()=>this.switchNameHandler('John')}>Switch your UserName</button>
    <UserInput changed={this.userNameChangeHandler}/>
    <UserOutput userName={this.state.userName}/>
    
    <UserOutput userName='Max'/>
    <UserOutput userName='Max'/>
    </div>
    );
    
  }
    
    
  }
