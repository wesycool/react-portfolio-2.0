const mongoose = require( 'mongoose' )

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio" , 
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

const db = require( './models' );

const orm = {
    projectList: async () => { return await db.Project.find({}) },
    postProject: async (body) => { return await db.Project.create(body) }
}

module.exports = orm