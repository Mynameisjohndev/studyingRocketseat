const express = require('express');
const { v4 } = require('uuid');
const app = express();

const customers = [];

app.use(express.json());

function verifyExistAccountCpf(request, response, next){
    const { cpf } = request.headers;

    const customer = customers.find(customer => customer.cpf === cpf);

    if(!customer){
        return response.status(400).json({error: "Customer not found!"})
    }

    request.customer = customer;

    return next();
}

function getBalance(statement){
    const balance = statement.reduce((acc, operation)=>{
        if(operation.type === "credit"){
            return acc + operation.amount;
        }else{
            return acc - operation.amount;
        }
    }, 0);

    return balance;
}

app.post("/account", (request, response) => {
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

app.get("/account", verifyExistAccountCpf, (request, response) => {

    const { customer } = request;

    return response.json(customer.statement);
});

app.post("/deposit", verifyExistAccountCpf, (request, response) => {
    const { description, amount } = request.body;

    const { customer } = request;

    const operation = {
        description,
        amount,
        created_at: new Date(),
        type: 'credit'
    };

    customer.statement.push(operation);

    return response.status(201).send();

});

app.post("/withdraw", verifyExistAccountCpf, (request, response) => {

    const { amount } = request.body;
    const { customer } = request;

    const balance = getBalance(customer.statement);

    if(balance < amount){
        return response.status(400).json({error: 'Insufficient fund!'})
    }

    const operation = {
        amount,
        created_at: new Date(),
        type: 'debit'
    }

    customer.statement.push(operation);

    return response.status(201).send();

})

app.listen(3333);