const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: [true, 'User name is required!']
    },
    "age": {
        type: Number,
        required: [true, 'User age should be defined!']
    },
});
module.exports = mongoose.model('User', UserSchema);