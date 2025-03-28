import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'categoria' | 'todos'
  valor?: enums.Categoria
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contaContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'categoria') {
      return contatos.itens.filter((c) => c.categoria === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio: criterio,
        valor
      })
    )
  }

  return (
    <S.Card ativo={verificaEstaAtivo()} onClick={filtrar}>
      <S.Contador>{contaContatos()}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
