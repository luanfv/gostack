import React from 'react';

export default (props) => {
    const projects = props.projects

    return (
        Array.isArray(projects)
        ?
        <ul>
            {projects.map(response => <li key={response.id}>{response.title} - {response.owner}</li>)}
        </ul>
        :
        <label>{projects.message}</label>
    )
}