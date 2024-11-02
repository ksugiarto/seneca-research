var seneca = require('seneca')()

var plugin = function(options) {

  this.add( {foo:'bar'}, function( args, done ) {
    done( null, {color: options.color} )
  })

}

seneca.use( plugin, {color:'pink'} )
seneca.act( {foo:'bar'}, console.log )