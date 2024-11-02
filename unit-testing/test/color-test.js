function test_seneca(fin) {
  return Seneca({log: 'test'})

  // activate unit test mode. Errors provide additional stack tracing context.
  // The fin callback is called when an error occurs anywhere.
  .test(fin)

  // load the microservice business logic
  .use(require('../color'))

}

var Lab = require('lab')
var Code = require('code')
var Seneca = require('seneca')

var lab = exports.lab = Lab.script()
var describe = lab.describe
var it = lab.it
var expect = Code.expect

describe('color', function () {

  it('to-hex', function (fin) {
    var seneca = text_seneca(fin)

    fin()
  })
})

it('to-hex', function (fin) {
  var seneca = test_seneca(fin)

  seneca.act({
    role: 'color',
    to: 'hex',
    color: 'red'
  }, function (ignore, result) {
    expect(result.hex).to.equal('FF0000')
    fin()
  })
})
