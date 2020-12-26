const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const {Schema} = mongoose

const OrderSchema = new Schema({
    buyer: { type: Schema.ObjectId, ref: 'USER' },
    seller: { type: Schema.ObjectId, ref: 'USER' },
    advert: { type: Schema.ObjectId, ref: 'ADVERT' },
    messages: [{
        type: Schema.ObjectId, ref: 'MESSAGE'
    }],
    created: { type: Date, default: Date.now }
});

OrderSchema.plugin(deepPopulate);
const ORDER = mongoose.model('ORDER', OrderSchema);

module.exports = ORDER