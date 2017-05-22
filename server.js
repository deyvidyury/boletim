const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect to database
mongoose.connect(config.database);
mongoose.connection.once('open',()=>{ console.log("MongoDB Connected");});
mongoose.connection.on('error',(err)=>{ console.log("MongoDB connection error: ",err);});

// On conenction
mongoose.connection.on('connected',()=>{
    console.log('Connected to database '+config.database);
})

// On error
mongoose.connection.on('error',(err)=>{
    console.log('Database error: '+err);
})

const app = express();

const alunos = require('./routes/alunos');

const port = process.env.PORT || 8080;

app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname,'public')));

// Body Parser MW
app.use(bodyParser.json());

app.use('/api',alunos);

app.use('/',(req,res) => {
    res.send('Invalid endpoint');
})

app.use('*', (req,res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
})

app.listen(port, () => {
    console.log("Server started on port "+port);
});
