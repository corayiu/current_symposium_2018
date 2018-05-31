const express = require('express')
const app = express()
const port = process.env.port 

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.listen(port, function() {
	console.log('you got this qt')
})

