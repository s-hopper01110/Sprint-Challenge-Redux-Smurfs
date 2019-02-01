import React from 'react';

const Smurfs = props => {
    return(
        <div>
            <h2>{props.smurf.name}</h2>
            <h4>{props.smurf.age}</h4>
            <p>{props.smurf.height}</p>
        </div>
    )
}

export default Smurfs; 

