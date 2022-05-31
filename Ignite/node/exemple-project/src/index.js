const express = require('express');
const { v4 } = require('uuid');
const app = express();

const customers = [];

app.use(express.json());

app.post("/acount", (request, response) => {
    const { cpf, name} = request.body;
    const id = v4();
    const customer = {
        cpf,
        name,
        id,
        statement: [],
    }
    customers.push(customer);
    return response.status(201).send(customer)
});


app.listen(3333);