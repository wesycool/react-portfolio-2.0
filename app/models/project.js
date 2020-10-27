const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: String, 
    category: String, 
    summary: String, 
    description:[String],
    tools: [String],
    github: String,
    link: [String]
})


const Project = mongoose.model("Project", projectSchema);

module.exports = Project;