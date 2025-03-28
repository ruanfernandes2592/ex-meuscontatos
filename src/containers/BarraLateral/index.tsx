import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import { Botao, Campo } from '../../styles'

type Props = {
  mostraFiltros: boolean
}

const BarraLateral = ({ mostraFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostraFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Categoria.FAVORITOS}
                criterio="categoria"
                legenda="Favoritos"
              />
              <FiltroCard
                valor={enums.Categoria.FAMILIA}
                criterio="categoria"
                legenda="Família"
              />
              <FiltroCard
                valor={enums.Categoria.TRABALHO}
                criterio="categoria"
                legenda="Trabalho"
              />
              <FiltroCard
                valor={enums.Categoria.OUTROS}
                criterio="categoria"
                legenda="Outros"
              />
              <FiltroCard criterio="todos" legenda="Todos" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')} type="button">
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
