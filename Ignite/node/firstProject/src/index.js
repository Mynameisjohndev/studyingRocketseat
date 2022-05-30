const express = require('express');

const app = express();

/*

    REQUISIÇÕES

    GET - BUSCAR DADOS DENTRO DO SERVIDOR
    POST - CRIAR UMA INFORMAÇÃO NO SERVIDOR
    PUT - ALTERAR UMA INFORMAÇÃOP NO SERVIDOR
    PATCH - ALTERAR UMA INFORMAÇÃO ESPECÍFICA 
    DELETE - DELETAR UMA INFORMAÇÃO NO SERVIDOR
*/


app.get('/courses', (request, response) => {
    return response.json(['curso 1, curso 2, curso 3']);
});

app.post('/courses', (request, response) => {
    return response.json(['curso 1, curso 2, curso 3, curso 4']);
});

app.put('/courses:id', (request, response) => {
    return response.json(['curso 6, curso 2, curso 3, curso 4']);
});

app.post('/courses:id', (request, response) => {
    return response.json(['curso 6, curso 7, curso 3, curso 4']);
});

app.delete('/courses:id', (request, response) => {
    return response.json(['curso 6, curso 2, curso 4']);
});

app.listen(3333);