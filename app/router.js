const orm = require('./orm')

function router( app ){
    app.get('/api/project-list', async (req,res) =>{
        res.send(await orm.projectList())
    })

    app.post('/api/new-project', async (req,res) =>{
        await orm.postProject(req.body)
        res.send(`success, ${req.body}`)
    })
}

module.exports = router