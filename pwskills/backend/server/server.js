import app from './app.js'

app.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  })