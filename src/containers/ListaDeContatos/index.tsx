import Contato from '../../components/Contato'
import { MainContainer } from './styles'

const contatos = [
  {
    nome: 'Ruan',
    categoria: 'familia',
    numero: '81994016336',
    email: 'ruanfernandes2592@gmai.com'
  },
  {
    nome: 'Pedro',
    categoria: 'trabalho',
    numero: '83994018575',
    email: 'pedro123@gmai.com'
  },
  {
    nome: 'Paulo',
    categoria: 'favoritos',
    numero: '47994016524',
    email: 'paulo123456@gmai.com'
  }
]

const ListaDeContatos = () => (
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

export default ListaDeContatos
