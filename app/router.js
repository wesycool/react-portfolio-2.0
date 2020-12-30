const orm = require('./orm')
const axios = require('axios')
require('dotenv').config()

function router( app ){
    app.get('/api/project-list', async (req,res) =>{
        res.send(await orm.projectList())
    })

    app.post('/api/new-project', async (req,res) =>{
        await orm.postProject(req.body)
        res.send(`success, ${req.body}`)
    })

    app.post('/api/email',(req,res) =>{
        const {service_id, template_id, user_id} = process.env
        const template_params = req.body
        const body = {service_id, template_id, user_id, template_params}
        
        axios.post('https://api.emailjs.com/api/v1.0/email/send', body)
        res.send(`success, email sent.`)
    })
}

module.exports = router