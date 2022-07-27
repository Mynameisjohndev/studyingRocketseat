import { FormEvent, useState, useContext } from "react";
import { Container, RadioBox, TransactionTypeContainer} from "./styles";
import Modal from 'react-modal';
import Close from '../../assets/Close.svg';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import { api } from "../../services/api";
import { TransactionContext } from "../../context/TransactionContext";
interface ModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }:ModalProps){

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const { createTransaction } = useContext(TransactionContext);

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    await createTransaction({
      type,
      amount,
      title,
      category
    });
    onRequestClose();
    setType("deposit");
    setTitle("");
    setCategory("");
    setAmount(0)
  }

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
          value={title}
          onChange={(event)=>setTitle(event.target.value)}
        />

        <input 
          placeholder="Valor" 
          type="number"
          value={amount}
          onChange={(event)=>setAmount(Number(event.target.value))}
        />

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

        <input 
          placeholder="Categoria" 
          value={category}
          onChange={(event)=>setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  )
}