const express = require('express');
const resultMod = require('./resultMod');
const path = require('path');
const operations = {
    "add" : function (first, second) { return first + second},
    "subtract" : function (first, second) {return first - second},
    "multiply" : function (first, second) {return first * second},
    "devide" : function (first, second) { return first / second}
};

const app = express();
app.use(express.urlencoded( {extended : false} ) );
app.use(express.json());

app.get('/', (req, res) => {
    console.log('/');
    res.sendFile(path.join(__dirname ,'public', 'simpleCalculator.html'));
});

app.get('/simpleCalculator', (req, res) => {
    console.log('/');
    res.sendFile(path.join(__dirname ,'public', 'simpleCalculator.html'));
});

app.post('/calulcate', (req, res) => {
    const first = parseInt(req.body.first);
    const second = parseInt(req.body.second);
    const operation = req.body.operation;
    const value = operations[operation](first, second);

    res.send(resultMod.add(req, res, value));
})

app.listen(8080, ()=>{
    console.log('app ready');
});