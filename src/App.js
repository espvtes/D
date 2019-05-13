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
    <UserInput 
    changed={this.userNameChangeHandler}
    value={this.state.userName}/>
    <UserOutput userName={this.state.userName}/>
    
    <UserOutput userName='Max'/>
    <UserOutput userName='Max'/>
    </div>
    );
    
  }
    
    
  }
