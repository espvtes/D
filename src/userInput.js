import React from 'react';

const userInput = props =>{
    //inline style
    const inputStyle = {
        border: "2px solid red"
    };
    const userInputStyles={
        textAlign: "left",
        paddingLeft:"16px"
    }
        return(
            <div style={userInputStyles} className="userInput">
            <input 
            type="text" 
            //assigned style
            style={inputStyle}
            onChange={props.changed}
            //you can pass here the name that you wish, example you can
            //pass like this: value={props.currenName} and the main App pass
            //pass like this: <UserInput changed={this.userNameChangeHandler} currenName={this.state.userName}/>
            value={props.value}/>
            </div>
        );
    }

export default userInput;