import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
  return (
    <MainContainer>
      <p>2 contatos marcados como &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              categoria={c.categoria}
              email={c.email}
              nome={c.nome}
              numero={c.numero}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
