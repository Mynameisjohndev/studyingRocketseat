import { Container } from "./styles";
import income from "../../assets/Entradas.svg"
import outcome from "../../assets/Saídas.svg"
import total from "../../assets/Total.svg"
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

export function Summary(){

  const transactions = useContext(TransactionContext);

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas"/>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcome} alt="Saidas"/>
        </header>
        <strong>R$500,00</strong>
      </div>
      <div className="hilight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total"/>
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}