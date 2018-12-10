const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
	res.send('Hello World');
	console.log('GET `/`');
})


app.listen(port,() => console.log(`Hello World App Listening on port ${port}`))


module.exports = app;