require('seneca')()
  .use('math')
  .listen({ type: 'tcp' })
  // .listen(3000)