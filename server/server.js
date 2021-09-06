const express= require('express');
const app = express();
require('dotenv').config();
app.use(express.json())

//routes
const userRoute = require ('./routes/userRoutes')
app.use('/users',userRoute);

const ProjectRoute = require ('./routes/projectRoutes')
app.use('/projects',ProjectRoute)

const TaskRoute = require ('./routes/taskRoutes')
app.use('/project/tasks',TaskRoute)
//connecting to database
const mongoose = require ('mongoose');
mongoose.connect(process.env.MONGO, (err)=> err ? console.error(err):console.log('database connected'))

//creating server
app.listen(process.env.PORT,(err)=>err ? console.error(err):console.log ("server is running on port",process.env.PORT));

