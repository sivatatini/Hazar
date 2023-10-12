const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
    name: {
        type: String,
    },
    roll: {
        type: Number,
        required: [true, 'Roll field is required'],
        min: [1000, 'Roll should not be less than 1000'],
        max: [10000, 'Roll cannot be more than 10000']
    },
    present: {
        type: Boolean,
        deafult: true
    }
    // ,
    //  time: {
    //      type: Date
    //  }
});


const Student = mongoose.model('student',StudentSchema);

module.exports = Student;