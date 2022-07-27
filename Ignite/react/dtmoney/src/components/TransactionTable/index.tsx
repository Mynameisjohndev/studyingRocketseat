import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){
  const transactions = useContext(TransactionContext)

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            return(
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}