import mongoose from 'mongoose'

const {ObjectId} = mongoose.Schema

const exerciseLogSchema = mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    workout: {
        type: ObjectId,
        ref: 'Workout',
        required: false
    },
    exercise: {
        type: ObjectId,
        ref: 'Exercise',
        required: true
    },
    times: [{
        weight: { type: Number, required: true },
        repeat: { type: Number, required: true },
        completed: {
            type: Boolean, default: false
        }
    }],
    completed: {
        type: Boolean, default: false
    }
}, {
    minimize: false,
    timestamps: true,
})

const ExerciseLog = mongoose.model('ExerciseLog', exerciseLogSchema)

export default ExerciseLog
