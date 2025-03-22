import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type TagProps = {
  categoria?: string
}

function retornaCorDeFundo(props: TagProps): string {
  if ('categoria' in props) {
    if (props.categoria === 'favoritos') return variaveis.amarelo2
    if (props.categoria === 'familia') return variaveis.verde
    if (props.categoria === 'trabalho') return variaveis.vermelho
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: ${variaveis.corNivel1};
  box-shadow: 4px 6px 8px rgba(242, 242, 242, 0.5);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const Nome = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 18px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`
export const Numero = styled.h3`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  margin-top: 8px;
`
export const Email = styled(Numero)`
  margin: 0;
`

export const BarraDeAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azul};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
