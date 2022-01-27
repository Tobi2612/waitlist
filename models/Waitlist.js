const mongoose = require('mongoose');


const WaitlistSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: [true, 'Please add a name'],
        maxlength: [50, 'Name can not be more than 50 characters']
    },

    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please add a valid email']
    },

    type: {
        type: String,
        required: [true, 'Please add a type. \n Available types are Investors or Asset listers'],
        enum: ['Investors', 'Asset listers']
    },
    description: {
        type: String,
        required: function () { return this.type === 'Asset listers'; }
    }

})

module.exports = mongoose.model('Waitlist', WaitlistSchema);