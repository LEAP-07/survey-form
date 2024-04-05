const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    name : String,
    answer_one : String,
    answer_two : String,
    answer_three : String
})

module.exports = mongoose.model('form', formSchema);

// form[name]
// form[answer_one]
// form[answer_two]
// form[answer_three]

