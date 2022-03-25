const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json([
        'PROJETO 1',
        'PROJETO 2'
    ]);
});

app.post('/projects', (request, response) => {
    return response.json([
        'PROJETO 1',
        'PROJETO 2',
        'PROJETO 3'
    ]);
});

app.put('/projects:id', (request, response) => {
    return response.json([
        'PROJETO 4',
        'PROJETO 2',
        'PROJETO 3'
    ]);
});

app.delete('/projects:id', (request, response) => {
    return response.json([
        'PROJETO 4',
        'PROJETO 2'
    ]);
});

app.listen(3333, () => {
    console.log('🚀Backend started!');
});