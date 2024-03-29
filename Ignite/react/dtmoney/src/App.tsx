import React, { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false);

  function handlepOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handlepCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handlepOpenNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle/>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlepCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
}


