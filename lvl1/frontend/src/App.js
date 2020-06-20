import React, { useState, useEffect } from 'react';
import Projects from './components/Projects';
import { api } from './services/api';

export default () => {
  const [projects, setProjects] = useState([])
  const [project, setProject] = useState({
    title: '',
    owner: '',
  })

  function saveProject() {
    const { title, owner } = project
    api.post('/projects', { title, owner })
    .then(response => {
      setProjects([ ...projects, response.data ])
      setProject({ ...project, title: '', owner: '' })
    })
  }
  
  useEffect(() => {
    api.get('/projects')
    .then(response => {
      setProjects(response.data)
    })
  }, [])

  return (
    <>
      <h1>GoStack</h1>
      <h2>Create Project</h2>
      <div>
        <input 
          placeholder="Title of project" 
          value={project.title} 
          onChange={response => setProject({ ...project, title: response.target.value })} 
        />
        <input 
          placeholder="Owner" 
          value={project.owner} 
          onChange={response => setProject({ ...project, owner: response.target.value })} 
        />
        <button onClick={saveProject}>Confirm</button>
      </div>
      <h2>My Projects</h2>
      <Projects projects={projects} />
    </>
  );
}
