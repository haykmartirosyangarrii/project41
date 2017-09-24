// server.js
const jsonServer = require('json-server')
const router = jsonServer.router('db.json')
const basicAuth = require('express-basic-auth')

const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000;
 
// server.use(basicAuth({
//     users: { 'admin': 'secret' },
//     challenge: true,
//     unauthorizedResponse: getUnauthorizedResponse,
// }))

// function getUnauthorizedResponse(req) {
//     return req.auth ?
//         {'Unauthorized':('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')} : 
//         {'Unauthorized':'No credentials provided'}
// }

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('json-server is running on port ' + port + '!')
})