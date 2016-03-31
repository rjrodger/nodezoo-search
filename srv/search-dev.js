'use strict'

 require('seneca')()
 .use('../search.js', {search: {
   elastic: {
     host: process.env.ELASTIC || 'localhost'
   }
 }})
 .add('role:info,info:updated', function (args, done) {
   done()
   this.act('role:search,cmd:insert', {name: args.name}, function (err, mod) {
     if (err) {
       return done(err);
     }
      return done();
   })
 })
    
 .use('mesh', {
   auto: true,
   pin: ['role:search', 'role:info,info:updated'],
   model: 'publish'
 })