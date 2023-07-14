import express from "express";
import __dirname from "./utils.js";

import viewRouter from './routes/views.router.js'
import coursesRouter from './routes/courses.router.js'
import usersRouter from './routes/users.router.js'
import handlebars from 'express-handlebars'



import mongoose from "mongoose";
import { strict } from "assert";

const app = express();
const PORT=8080;

mongoose.set('strictQuery' ,true)
const connection=mongoose.connect('mongodb+srv://facuagustin17:JcrfABZfv7vzrkKE@e-commerce.vkqtlyj.mongodb.net/?retryWrites=true&w=majority');

app.engine('handlebars',handlebars.engine());
app.set('view',__dirname+'/views')
app.set('view engine','handlebars')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',viewRouter)
app.use('/api/courses',coursesRouter)
app.use('/api/users',usersRouter)

const server =app.listen(8080, ()=>console.log("server Arriba")  ) 