import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles/index'
import { Campo } from '../../styles'
import { Form, OpcoesPageAdd, Opcao } from './styles'
import * as enums from '../../utils/enums/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.OUTROS)

  const cadastrarContato = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        nome,
        categoria: enums.Categoria.OUTROS,
        numero,
        email
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
          type="text"
          placeholder="Número"
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="E-mail"
        />
        <OpcoesPageAdd>
          <p>Categoria</p>

          {Object.values(enums.Categoria).map((cat) => (
            <Opcao key={cat}>
              <input
                type="radio"
                name="categoria"
                onChange={(e) =>
                  setCategoria(e.target.value as enums.Categoria)
                }
                value={cat}
                id={cat}
                defaultChecked={cat === enums.Categoria.OUTROS}
              />{' '}
              <label htmlFor={cat}>{cat}</label>
            </Opcao>
          ))}
        </OpcoesPageAdd>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
