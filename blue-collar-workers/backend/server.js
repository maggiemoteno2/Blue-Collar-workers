const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000
const server = express()
const  {appRoutes} = require('./routes/personRoute')

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));


appRoutes(server)

server.listen(port, () => {
  console.log(`listening to port ${port}`)
}) 