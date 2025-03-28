import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;

  input {
    margin-bottom: 16px;
  }
`

export const OpcoesPageAdd = styled.div`
  margin-bottom: 16px;
  color: ${variaveis.corNivel1};

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 6px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
