const express = require('express')
const { uuid, isUuid } = require('uuidv4')
const { json } = require('express')
const app = express()

app.use(express.json())

const projects = []

function validateId(request, response, next)
{
    const { id } = request.params

    if(!isUuid(id))
        return response.status(400).json({ error: 'Invalid ID!' })

    return next()
}

function logRequest(request, response, next)
{
    const { method, url } = request
    const logLabel = `[${method.toUpperCase()}] ${url}`

    console.time(logLabel)
    next()
    console.timeEnd(logLabel)
}

app.use(logRequest) // É utilizado em antes de qualquer requisição
app.use('/projects/:id', validateId) // É utilizado em todos que tiverem a rota que é passada por parametro

app.get('/projects', (request, response) => {
    if(projects.length === 0)
        return response.json({ message: 'List void!' })

    const { title } = request.query
    const results = title ? projects.filter(project => project.title.includes(title)) : projects

    return response.json(results)
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body
    const project = { id: uuid(), title, owner }
    projects.push(project)

    return response.json(project)
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params
    const { title, owner } = request.body
    const projectIndex = projects.findIndex(project => project.id === id) 
    
    if(projectIndex < 0)
        return response.status(400).json({ error: 'Project not found!' })
    
    const project = {
        id,
        title,
        owner,
    }
    projects[projectIndex] = project

    return response.json(project) 
})


app.delete('/projects/:id', validateId, (request, response) => { // É utilizado só nessa requisição
    const { id } = request.params
    const projectIndex = projects.findIndex(project => project.id === id) 
    
    if(projectIndex < 0)
        return response.status(400).json({ error: 'Project not found!' })

    projects.splice(projectIndex, 1)
    return response.send(204)
})

app.listen(3333, () => {
    console.log('Back-end started')
})