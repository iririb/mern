// we are going to create a schema for our mongo db database
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// here is where we define for the schema for our data
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)