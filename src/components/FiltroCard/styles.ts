import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 2px solid
    ${(props) => (props.ativo ? variaveis.corNivel2 : variaveis.corNivel3)};
  background-color: ${(props) =>
    props.ativo ? variaveis.corNivel3 : variaveis.corNivel4};
  color: ${(props) => (props.ativo ? '#fff' : variaveis.corNivel1)};
  margin-bottom: 8px;
  border-radius: 8px;
  width: 60%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    background-color: ${variaveis.corNivel3};
    border-color: ${variaveis.corNivel4};
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 21px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
