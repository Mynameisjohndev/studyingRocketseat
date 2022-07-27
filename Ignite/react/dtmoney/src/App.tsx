import React, { useState } from 'react';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';

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
    <>
      <Header onOpenNewTransactionModal={handlepOpenNewTransactionModal}/>
      <Dashboard/>
      <GlobalStyle/>
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlepCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  );
}

