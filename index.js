const fs = require('fs')
const app = require('express')();
const bodyParser = require('body-parser');
const routes = require('./routes')

app.use( bodyParser.json() )

fs.readdir('controllers',(err,files) => {
    const controllers = files.reduce( ( acc, cur ) => {
        return {
          [ cur.split('.')[0] ]: require( `./controllers/${cur}` ), ...acc
        }
      }, {} )
    const models = fs.readdirSync('./models').map(m => m.split('.')[0])
      for(i in controllers){
          for(j in models){
              console.log(`${routes[i].method},${models[j]}${routes[i].path}`)
              app[routes[i].method](`/${models[j]}/${routes[i].path}`,controllers[i](models[j]))
          }
      }
})

const port = process.env.PORT||3000

app.listen(port,()=>{console.log(`listening on port ${port}`)})


/*fs.readdir( 'models', function ( err, items ) {
    const models = items.reduce( ( acc, cur ) => {
      return {
        [ cur ]: require( `./models/${cur}` ), ...acc
      }
    }, {} )
    for ( i in models ) {
      let model = models[ i ]
      for ( j in model ) {
        console.log( routes[ j ][ 'method' ], `/${i}${routes[j]['path']}` )
        app[ routes[ j ][ 'method' ] ]( `/${i}${routes[j]['path']}`, model[ j ] )
      }
    }
  } );*/