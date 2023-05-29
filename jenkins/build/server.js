//https://docs.docker.com/language/nodejs/build-images/

//http://localhost:8000/test

//curl --request POST \
//  --url http://localhost:8000/test \
//  --header 'content-type: application/json' \
//  --data '{"msg": "testing" }'

const ronin = require('ronin-server')
const mocks = require('ronin-mocks')

const server = ronin.server()

server.use('/', mocks.server(server.Router(), false, true))
server.start()