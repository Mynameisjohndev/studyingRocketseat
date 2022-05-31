const express = require('express');
const { v4 } = require('uuid');
const app = express();

const customers = [];

app.use(express.json());

app.post("/acount", (request, response) => {
    const { cpf, name} = request.body;

    const customerAlreadyExists = customers.some((customer)=>customer.cpf === cpf);

    if(customerAlreadyExists){
        return response.status(400).json({message: "Customer already exists!"});
    }

    const customer = {
        cpf,
        name,
        id: v4(),
        statement: [],
    }
    customers.push(customer);
    return response.status(201).send(customer)
});


app.listen(3333);