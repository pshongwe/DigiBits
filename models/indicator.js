
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema( {
    name: String,
    type: String,
    description:String
})

const model = mongoose.model( 'indicator', schema );

module.exports = {schema,model}