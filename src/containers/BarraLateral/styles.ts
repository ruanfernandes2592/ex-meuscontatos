import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.corNivel5};
  height: 100vh;
  border-right: solid 2px ${variaveis.corNivel1};
`
export const Filtros = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CampoBuscar = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: ${variaveis.corNivel1};
  font-weight: bold;
  color: ${variaveis.corNivel5};
  border: 2px solid ${variaveis.corNivel3};
  width: 100%;
  outline: none;
`
