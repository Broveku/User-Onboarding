import React from 'react';

function TeamMember(props) {
    return (
        <div>
            <h1>{props.teamMember.name}</h1>
            <p>{props.teamMember.email}</p>
            <p>{props.teamMember.password}</p>
            
        </div>
    );
}

export default TeamMember;