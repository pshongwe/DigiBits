
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema( {
    name: String,
    description: String,
    indicators:[{
        type: Schema.Types.ObjectId,
        ref: 'indicator'
      }]
})

const model = mongoose.model( 'form', schema );

module.exports = {schema,model}