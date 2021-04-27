const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: new Date()
    },
    currentStatus: {
        type: String,
        required: true,
        default: 'Product Received'
    },
    senderName: {
        type: String,
        required: true
    },
    senderAddress: {
        type: String,
        required: false
    },
    senderNumber: {
        type: String,
        required: true
    },
    receiverName: {
        type: String,
        required: true
    },
    receiverAddress: {
        type: String,
        required: true
    },
    receiverNumber: {
        type: String,
        required: true
    },
    unId:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Product', productSchema);