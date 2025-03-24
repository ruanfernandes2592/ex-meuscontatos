import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.CampoBuscar
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(e) => dispatch(alterarTermo(e.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="favoritos" contador={2} />
          <FiltroCard legenda="familia" contador={3} />
          <FiltroCard legenda="trabalho" contador={4} />
          <FiltroCard legenda="todos" contador={9} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
