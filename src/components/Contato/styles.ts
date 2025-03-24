import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'

type TagProps = {
  categoria?: enums.Categoria
}

function retornaCorDeFundo(props: TagProps): string {
  if ('categoria' in props) {
    if (props.categoria === enums.Categoria.FAVORITOS) return variaveis.amarelo
    if (props.categoria === enums.Categoria.FAMILIA) return variaveis.verde
    if (props.categoria === enums.Categoria.TRABALHO) return variaveis.vermelho
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: ${variaveis.corNivel1};
  box-shadow: 4px 6px 8px rgba(242, 242, 242, 0.5);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  max-width: 512px;
  min-width: 280px;
`
export const Nome = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 18px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`
export const Opcoes = styled.option`
  background-color: ${variaveis.corNivel4};
`

export const Numero = styled.h3`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  margin-top: 8px;
  display: block;
`
export const Email = styled(Numero)`
  margin: 0;
  display: block;
  width: 256px;
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
  background-color: ${variaveis.corNivel4};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
