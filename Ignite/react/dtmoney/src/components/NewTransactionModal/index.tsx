import { Container } from "./styles";
import Modal from 'react-modal';
import Close from '../../assets/Close.svg';
interface ModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }:ModalProps){
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
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}