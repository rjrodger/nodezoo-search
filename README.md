![logo-nodezoo](https://raw.githubusercontent.com/rjrodger/nodezoo-web/to-redux/client/assets/img/logo-nodezoo.png)

# nodezoo-web
Nodezoo Search is an interface with an elasticsearch server. Nodezoo is an example microservice system written in node.js. It is written in a workshop format and designed to help you explore a full microservice
system. Please see the [main repo][] for more details

- __Sponsor:__ [nearForm][]


## Install
npm install nodezoo-search


## Tagging and Logging
Options can be specified using '--'

npm run start --your.options

```sh
// tagging example
npm run start --seneca.options.tag=npm
```
```sh
// logging example
npm run start --seneca.log.all
```

The -- tells npm to forward options to the commands it is running


## Running
npm run start
npm run start-dev



## Messages
This micro-service recognizes the following messages:

   * _role:search,cmd:insert_ - insert module details into search engine index
   * _role:search,cmd:search_ - query the search engine


## Contributing
The [NodeZoo][] org encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

## License
Copyright (c) 2015, Richard Rodgers and other contributors.
Licensed under [MIT][].


[MIT]: ./LICENSE
[Code of Conduct]: https://github.com/nearform/vidi-contrib/docs/code_of_conduct.md
[nearForm]: http://www.nearform.com/
[NodeZoo]: http://www.nodezoo.com/
[main repo]: https://github.com/rjrodger/nodezoo
