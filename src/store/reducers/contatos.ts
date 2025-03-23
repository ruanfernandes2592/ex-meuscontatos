import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato(
      'Ruan',
      enums.Categoria.FAMILIA,
      '81994016336',
      'ruanfernandes2592@gmail.com',
      1
    ),
    new Contato(
      'Pedro',
      enums.Categoria.TRABALHO,
      '83994018575',
      'pedro123@gmail.com',
      2
    ),
    new Contato(
      'Paulo',
      enums.Categoria.FAVORITOS,
      '47994016524',
      'paulo123456@gmail.com',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((c) => c.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
