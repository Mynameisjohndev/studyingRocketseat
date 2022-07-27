import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface Transaction{
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}
type CreateTransaction = Omit<Transaction, 'id' | 'createdAt' >

interface TransactionProviderProps{
  children: ReactNode;
}
interface TransactionContextData{
  transactions: Transaction [];
  createTransaction: (transaction: CreateTransaction) => void;
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

  export function TransactionProvider({ children }: TransactionProviderProps){

    const [transactions, setTransactions] = useState<Transaction []>([]);

    useEffect(()=>{
      api.get("/transactions").then((response)=>{
        setTransactions(response.data.transactions);
      })
      .catch((err)=>{
        console.log(err)
      })
    },[])

    function createTransaction(transaction: CreateTransaction){
      api.post("/transactions", transaction)
      .then(()=>{
      })
    }

    return(
      <TransactionContext.Provider value={{transactions, createTransaction}}>
        {children}
      </TransactionContext.Provider>
    )
  }
