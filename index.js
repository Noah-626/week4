const express = require('express');
const app = express();
const SERVER_PORT = 3000 || process.env.SERVER_PORT;

app.get('/', (req, res) =>{
    res.end('Welcome;');
});


app.post('/', (req, res) =>{
    res.end('POST - Welcome;');
});


app.listen(SERVER_PORT, () =>{
    res.end('Server listening on port ' + SERVER_PORT);
})