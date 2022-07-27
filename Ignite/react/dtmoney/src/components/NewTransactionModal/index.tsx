import { Container, RadioBox, TransactionTypeContainer} from "./styles";
import Modal from 'react-modal';
import Close from '../../assets/Close.svg';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import { useState } from "react";
interface ModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }:ModalProps){

  const [type, setType] = useState('deposit');

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={Close} alt="Fechar modal"/>
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título"/>

        <input placeholder="Valor" type="number"/>

        <TransactionTypeContainer>

        <RadioBox 
          type="button" 
          onClick={() => setType('deposit')} 
          isActive={type === 'deposit'}
          activeColor="green"
        >
          <img src={incomeImg} alt="Entradas"/>
          <span>Entradas</span>
        </RadioBox>

        <RadioBox 
          type="button" 
          onClick={() => setType('withdraw')}
          isActive={type === 'withdraw'}
          activeColor="red"
        >
          <img src={outcomeImg} alt="Saidas"/>
          <span>Saídas</span>
        </RadioBox>

        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  )
}