import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  termo?: string
  criterio: 'categoria' | 'todos'
  valor?: enums.Categoria
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filtroSlace = createSlice({
  name: 'filtro',
  initialState: initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alterarTermo, alterarFiltro } = filtroSlace.actions

export default filtroSlace.reducer
