import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Campo, BotaoSalvar } from '../../styles'

type Props = ContatoClass

const Contato = ({
  id,
  categoria: categoriaOriginal,
  nome: nomeOriginal,
  numero: numeroOriginal,
  email: emailOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [numero, setNumero] = useState(numeroOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [categoria, setCategoria] = useState(categoriaOriginal)

  /*useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (numeroOriginal.length > 0) {
      setNumero(numeroOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (categoriaOriginal.length > 0) {
      setCategoria(categoriaOriginal)
    }
  }, [nomeOriginal, numeroOriginal, emailOriginal, categoriaOriginal])*/

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
    setCategoria(categoriaOriginal)
  }

  return (
    <S.Card>
      {estaEditando ? (
        <>
          <S.Nome
            as={Campo}
            style={{ color: '#222' }}
            value={nome}
            onChange={(e) => setNome(e.target.value)} // Vai permitir editar o input
          ></S.Nome>
          <S.Tag
            as={'select'}
            style={{ color: '#f2f2f2' }}
            categoria={categoria}
            value={categoria}
            onChange={(e) => setCategoria(e.target.value as enums.Categoria)}
          >
            <S.Opcoes>{enums.Categoria.FAMILIA}</S.Opcoes>
            <S.Opcoes>{enums.Categoria.TRABALHO}</S.Opcoes>
            <S.Opcoes>{enums.Categoria.FAVORITOS}</S.Opcoes>
            <S.Opcoes>{enums.Categoria.OUTROS}</S.Opcoes>
            {categoria}
          </S.Tag>
          <S.Numero
            as={Campo}
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          ></S.Numero>
          <S.Email
            as={Campo}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></S.Email>
          <S.BarraDeAcoes>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    categoria,
                    nome,
                    numero,
                    email
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </S.BarraDeAcoes>
        </>
      ) : (
        <>
          <S.Nome>{nomeOriginal}</S.Nome>
          <S.Tag categoria={categoriaOriginal}>{categoria}</S.Tag>
          <S.Numero>{numero}</S.Numero>
          <S.Email>{email}</S.Email>
          <S.BarraDeAcoes></S.BarraDeAcoes>
          <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
          <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
            Remover
          </S.BotaoCancelarRemover>
        </>
      )}
    </S.Card>
  )
}

export default Contato
