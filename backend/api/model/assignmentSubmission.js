const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const assignmentSubmissionSchema = new Schema({


    Name :{
        type : String
    },
    lecturerID :{
        type : String
    },
    subjectID :{
        type : String
    },
    date:{
        type:String
    },
    description:{
        type:String
    }
});


module.exports = mongoose.model('AssignmentSubmission', assignmentSubmissionSchema);