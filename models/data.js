
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema( {
    value: String,
    indicator: {
        type: Schema.Types.ObjectId,
        ref: 'indicator'
      },
      day:String,
      month:String,
      year:String
})

const model = mongoose.model( 'data', schema );

module.exports = {schema,model}