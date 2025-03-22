import { useState } from 'react'
import * as S from './styles'

type Props = {
  nome: string
  categoria: string
  numero: string
  email: string
}

const Contato = ({ categoria, email, nome, numero }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.Tag categoria={categoria}>{categoria}</S.Tag>
      <S.Numero>{numero}</S.Numero>
      <S.Email>{email}</S.Email>
      <S.BarraDeAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraDeAcoes>
    </S.Card>
  )
}

export default Contato
