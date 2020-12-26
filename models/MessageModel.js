const mongoose = require('mongoose');
const {Schema} = mongoose

const MessageSchema = new Schema({
    owner: {type: Schema.ObjectId, ref: 'USER'},
    content: {type: String},
    created: {type: Date, default: Date.now}
})


const MESSAGE =mongoose.model('MESSAGE', MessageSchema)
module.exports = MESSAGE