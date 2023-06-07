import { Carro } from "../Carro";
import {
  Botao,
  GaragemContainer,
  Estacionamento
} from "./style";

export function Garagem({ nome, mensagemAprentacao }) {
  return (

    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mensagemAprentacao}>Mensagem</Botao>

      <Estacionamento>
        <Carro adicionadoPor={nome} cor={"Vermelho"} ano={2022} flex={"true"} />
        <Carro adicionadoPor={nome} cor={"Verde"} ano={2020} flex={"false"} />
      </Estacionamento>
        
      <Estacionamento>
          <Carro adicionadoPor={nome} cor={"Amarelo"} ano={2009} flex={"false"} />
          <Carro adicionadoPor={nome} cor={"Rosa"} ano={2022} flex={"true"} />
      </Estacionamento>
    
    <Botao onClick={mensagemAprentacao}> Br disse que é um botão </Botao>
      
    </GaragemContainer>
      );
}
