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

interface TransactionProviderProps{
  children: ReactNode;
}

export const TransactionContext = createContext<Transaction []>([]);

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

    return(
      <TransactionContext.Provider value={transactions}>
        {children}
      </TransactionContext.Provider>
    )
  }
