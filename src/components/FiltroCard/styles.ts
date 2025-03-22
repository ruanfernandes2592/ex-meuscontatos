import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegECont = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegECont>`
  padding: 8px;
  border: 2px solid ${(props) => (props.ativo ? '#A67968' : '#593d2d')};
  background-color: ${(props) => (props.ativo ? '#593D2D' : '#402820')};
  color: ${(props) => (props.ativo ? '#fff' : '#f2f2f2')};
  margin-bottom: 8px;
  border-radius: 8px;
  width: 60%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  &:hover {
    background-color: #593d2d;
    border-color: #402520;
    //opacity: 0.9;
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
