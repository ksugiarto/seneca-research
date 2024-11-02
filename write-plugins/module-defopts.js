var seneca = require('seneca')()

seneca.use('./foo-defopts', {
  color:'pink',
  box: {
    width: 50,
  }
})

seneca.act({foo:'bar'}, console.log)