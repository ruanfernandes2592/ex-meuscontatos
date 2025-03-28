import styled, { createGlobalStyle } from 'styled-components'
import variaveis from '../styles/variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  background-color: ${variaveis.corNivel5};
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin: 40px 0;
  font-size: 18px;
  font-weight: bold;
  color: ${variaveis.corNivel2};
`
export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: ${variaveis.corNivel1};
  font-weight: bold;
  color: ${variaveis.corNivel3};
  border: 2px solid ${variaveis.corNivel3};
  width: 100%;
  outline: none;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.corNivel3};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
