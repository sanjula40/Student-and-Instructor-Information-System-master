const mongoose = require('mongoose');

const msgSchema = mongoose.Schema({

    msg_title: {
        type: String
    },


    msg_description: {
        type: String
    },

});

module.exports = mongoose.model('Msg', msgSchema);