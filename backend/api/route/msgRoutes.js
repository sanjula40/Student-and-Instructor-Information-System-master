const express = require('express');
const msgRoutes = express.Router();
let Msg = require('../model/msg');

msgRoutes.route('/add').post((req,res) => {
    let msg = new Msg(req.body);
    msg.save().then(msg => {
        res.status(200).send({data: msg});
    }).catch( err => {
        res.status(400).send("Unable to insert data");
    });
});
msgRoutes.route('/msgs').get((req,res) => {
    Msg.find((err,msg) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send({msg: msg});
        }
    });
});
msgRoutes.route('/:id').get((req,res) => {
    let id = req.params.id;
    Msg.findById(id, (err,msg) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send({message: msg});
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


msgRoutes.put('/update/:id',(req,res)=>{
    //const user = new UserModel(req.body);
    Msg.findByIdAndUpdate({_id:req.params.id},req.body,(err,response)=>{
        if(err){
            res.json({message:"PUT error"});
        }
        res.json(response);
    });
});

    msgRoutes.route('/delete/:id').delete(function (req, res) {
    Msg.findByIdAndRemove({_id: req.params.id}, function(err, msg){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = msgRoutes;