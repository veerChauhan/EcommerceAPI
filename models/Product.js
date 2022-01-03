const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        title: {
            type: 'string',
            required: true,
            minLength: 3,
        },
        description: {
            type: 'string',
            required: true,
            unique: true,
        },
        image: {
            required: true,
            type: 'string',
        },
        category: {
            type: 'string',
            required: true,
        },
        size: {
            type: 'string',
            required: true,
        },
        price: {
            type: 'number',
            required: true,
        },
        color: {
            type: 'string',
            default: false,
        },
        createdDate: {},
    },
    { timestamp: true }
)

module.exports = mongoose.model('Product', productSchema)
