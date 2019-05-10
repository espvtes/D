import React from 'react';

const UserOutput = props => {
    
        return(
            <div className="userOutput">
            <p>I am {props.name} and I have {props.age} years old</p>
            <p>He is my sister Melissa and she has 40 years old</p>
            
            </div>
        );
    }
export default UserOutput;