import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    return itens.filter(
      (c) => c.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      //(c) => c.numero.search(termo) >= 0
    )
  }

  return (
    <MainContainer>
      <p>
        2 contatos marcados como &quot;categoria&quot; e &quot;{termo}&quot;
      </p>
      <ul>
        {filtraContatos().map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
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
