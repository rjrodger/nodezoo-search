var ELASTIC = process.env.ELASTIC || 'localhost'
var STATS = process.env.STATS || 'localhost'

require('seneca')()
  .use('../search.js',{elastic:{host:ELASTIC}})
  
  .add('role:search,cmd:insert',function(args,done){
   done()
   this.act('role:search,cmd:insert', {data: args.data})
   })
  .add('role:search,req:search',function(args,done){
    done()
    console.log('search')
    this.act('role:search,cmd:search',{query:args.query})
  })

  .use('mesh',{auto:true, pin:'role:search'})
