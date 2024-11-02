var seneca = require('seneca')()

seneca.add({role:'math', cmd:'sum', integer:true}, function (msg, respond) {
  var sum = Math.floor(msg.left) + Math.floor(msg.right)
  respond(null, {answer: sum})
})

seneca.add({role:'math', cmd:'product'}, function (msg, respond) {
  var product = msg.left * msg.right
  respond(null, {answer: product})
})

seneca.act({role:'math', cmd:'sum', integer:true, left:1.2, right:2.3}, console.log)
      .act({role:'math', cmd:'product', left:3, right:4}, console.log)
