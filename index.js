const fs = require('fs')
const app = require('express')();
const bodyParser = require('body-parser');
var cors = require('cors')
const mongoose = require( 'mongoose' );

const routes = require('./routes')
const form_model = require('./models/form')

app.use(bodyParser.json())
app.use(cors())

fs.readdir('controllers', (err, files) => {
    const controllers = files.reduce((acc, cur) => {
        return {
            [cur.split('.')[0]]: require(`./controllers/${cur}`), ...acc
        }
    }, {})
    const models = fs.readdirSync('./models').map(m => m.split('.')[0])
    for (i in controllers) {
        for (j in models) {
            app[routes[i].method](`/${models[j]}${routes[i].path}`, controllers[i](models[j]))
        }
    }
})

const port = process.env.PORT || 3000

app.listen(port, () => { console.log(`listening on port ${port}`) })

const DB_URI = process.env.DB_URL || 'mongodb://localhost:27017/digibits'

mongoose.connect( DB_URI, {
    useNewUrlParser: true
  } );
  const connection = mongoose.connection
  connection.on( 'error', _ => {
    console.log( 'try reconnect', _ );
    mongoose.connect();
  } )
  
  connection.once( 'open', _ => {
    console.log( 'Connected' )
  } )

  app.get('/load_form/:form_id',async (req,res) => {
      const form_data = await form_model.model.findOne({_id:req.params.form_id}).populate('indicators')
      res.send(form_data)
  })
  
  exports.mongoose = mongoose;
