const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: 'string',
            required: true,
            minLength: 3,
            unique: true,
        },
        email: {
            type: 'string',
            required: true,
            unique: true,
        },
        password: {
            type: 'string',
            required: true,
        },
        isAdmin: {
            type: 'boolean',
            default: false,
        },
        createdDate: {},
    },
    { timestamp: true }
)

module.exports = mongoose.model('User', userSchema)
