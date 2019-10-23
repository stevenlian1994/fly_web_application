var express = require('express')
var app = express()
const request = require('request-promise')
// point to dist folder
app.use( express.static(__dirname + '/public/dist/public' ) );

const options = {
  method: 'GET',
  uri: 'http://localhost:9000/',
  json: true 
}


app.get('/proxyToImages', function(req,res){
  request(options)
  .then((data) => {
    res.json(data)
  })
  .catch((err) => {
    console.log(err)
    res.render('error')
  })
})

app.post('/sendImage', function(req,res){
  console.log('inside server.js')
  console.log(req.body);
})

app.listen(7000, function(){
  console.log("listening on port 7000")
})
