const express = require('express');

const app = express();
app.get('/projects', (request, response) => {
    return response.send({ message: 'Hello world!' })
})

app.listen(3333);