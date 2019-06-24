const express = require('express');
const assignmentSubmissionRoute = express.Router();
let Assignment = require('../model/assignmentSubmission');

assignmentSubmissionRoute.route('/add').post((req,res) => {
    let assignment = new Assignment(req.body);
    assignment.save().then(assignment => {
        res.status(200).send({data: assignment});
    }).catch( err => {
        res.status(400).send("Unable to insert data");
    });
});
assignmentSubmissionRoute.route('/assignments').get((req,res) => {
    Assignment.find((err,assignment) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send({assignment: assignment});
        }
    });
});
assignmentSubmissionRoute.route('/:id').get((req,res) => {
    let id = req.params.id;
    Assignment.findById(id, (err,assignment) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send({assignment: assignment});
        }
    });
});


/*
msgRoutes.put('/edit/:id', (req, res, next) => {
    console.log(req.params);
    console.log(req.body);
    Msg.findByIdAndUpdate(req.params._id, req.body)
        .then(response => {
            res.status(200).json({
                responseType: 'success'
            });
        })
        .catch(err => {
            // console.log(err);
            res.status(400).json({
                error: "Cannot find digital image with id: " + req.params._id,
                errorMessage: err
            });
        });
});
*/


assignmentSubmissionRoute.put('/update/:id',(req,res)=>{
    //const user = new UserModel(req.body);
    Assignment.findByIdAndUpdate({_id:req.params.id},req.body,(err,response)=>{
        if(err){
            res.json({message:"PUT error"});
        }
        res.json(response);
    });
});

assignmentSubmissionRoute.route('/delete/:id').delete(function (req, res) {
    Assignment.findByIdAndRemove({_id: req.params.id}, function(err, assignment){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = assignmentSubmissionRoute;