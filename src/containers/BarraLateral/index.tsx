import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.CampoBuscar type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="favoritos" contador={2} />
        <FiltroCard legenda="familia" contador={3} />
        <FiltroCard legenda="trabalho" contador={4} />
        <FiltroCard legenda="todos" contador={9} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
