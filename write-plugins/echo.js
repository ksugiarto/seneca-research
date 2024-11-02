var seneca = require('seneca')()

seneca.use('seneca-echo')
seneca.act({role: 'echo', foo: 'bar'}, console.log)
