import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Ruan',
      categoria: enums.Categoria.FAMILIA,
      numero: '81994016336',
      email: 'ruanfernandes2592@gmail.com'
    },
    {
      id: 2,
      nome: 'Pedro',
      categoria: enums.Categoria.TRABALHO,
      numero: '83994018575',
      email: 'pedro123@gmail.com'
    },
    {
      id: 3,
      nome: 'Paulo',
      categoria: enums.Categoria.FAVORITOS,
      numero: '47994016524',
      email: 'paulo123456@gmail.com'
    },
    {
      id: 4,
      nome: 'Caio',
      categoria: enums.Categoria.OUTROS,
      numero: '83994018575',
      email: 'pedro123@gmail.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      // Vai retornar um array com todos os contatos exceto o contato com o id que foi clicado
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id // Vai identificar em qual contato o usuario realizou a ação de clicar em aditar
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload // Vai manter as alterações realizadas
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
