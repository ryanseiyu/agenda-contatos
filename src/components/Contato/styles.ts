import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
`
export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Dados = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 10px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 20%;
  margin-bottom: 16px;
  margin-top: 16px;
  margin-left: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
