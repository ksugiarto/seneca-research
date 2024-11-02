var seneca = require('seneca')()

seneca.use('./foo.js', {color:'pink'})
seneca.act({foo:'bar'}, console.log)
