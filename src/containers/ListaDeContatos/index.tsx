import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles/index'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (c) => c.nome.toLowerCase().search(termo.toLowerCase()) >= 0
        //(c) => c.numero.search(termo) >= 0
      )
      if (criterio === 'categoria') {
        contatosFiltrados = contatosFiltrados.filter(
          (c) => c.categoria === valor
        )
      }
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeMsg = () => {
    if (criterio === 'todos') {
      const msg = `${
        filtraContatos().length
      } Contato(s) marcado(s) como Todos: "${termo}"`
      return msg
    } else if (criterio === 'categoria' && valor !== undefined) {
      const msg = `${filtraContatos().length} Contato(s) marcado(s) como ${
        valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase()
      }: "${termo}"`
      return msg
    }
  }

  return (
    <MainContainer>
      <Titulo as="p">{exibeMsg()}</Titulo>
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
