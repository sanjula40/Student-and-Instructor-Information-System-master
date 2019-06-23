const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String},
    materialCopy: { type: String, required: true }
});

module.exports = mongoose.model('Material', materialSchema);