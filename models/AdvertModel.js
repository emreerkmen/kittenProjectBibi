const mongoose = require('mongoose')
const mongooseAlgolia = require('mongoose-algolia')
const {Schema} = mongoose

const advertSchema = new Schema({
    owner: {type: Schema.ObjectId, ref: 'User'},
    title: {type: String},
    category:{type: String},
    about:{type: String,  maxLength: 50},
    price: {type: Number},
    picture: {type: String, default: 'http://placehold.it/350x150'},
    created: {type: Date, default: Date.now}
})
const ADVERT = mongoose.model('ADVERT', advertSchema)

module.exports=ADVERT