import React from 'react';
import "./index.css";

const UserOutput = props => {
    
        return(
            <div className="UserOutput">
            <p>Username:{props.userName}</p>
            <p>He is my sister Melissa and she has 40 years old</p>
            
            </div>
        );
    }
export default UserOutput;