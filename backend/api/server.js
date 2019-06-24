// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const studentRoute = require('./route/studentRoutes');
const assignmentRoute = require('../api/route/assignmentRoute');
const materialRoute = require('../api/route/materialRoute');
const msgRoutes = require('../api/route/msgRoutes');
const assignmentSubmissionRoute = require('./route/assignmentSubmissionRoute');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use("/uploads" ,express.static('uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/student', studentRoute);
app.use('/assignment', assignmentRoute);
app.use('/material', materialRoute);
app.use('/msg', msgRoutes);//first give this
app.use('/assignmentSubmission', assignmentSubmissionRoute);



app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});