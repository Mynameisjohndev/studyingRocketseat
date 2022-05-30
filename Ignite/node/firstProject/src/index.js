const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    return response.json('Começando novo módulo!');
})

app.listen(3333);