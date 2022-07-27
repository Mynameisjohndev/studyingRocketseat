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
  createTransaction: (transaction: CreateTransaction) => Promise<void>;
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

    async function createTransaction(transactionInput: CreateTransaction){
      const response = await api.post("/transactions", {
        ...transactionInput,
        createdAt: new Date()
      })
      const { transaction } = response.data;
      setTransactions([...transactions, transaction]);
    }

    return(
      <TransactionContext.Provider value={{transactions, createTransaction}}>
        {children}
      </TransactionContext.Provider>
    )
  }
