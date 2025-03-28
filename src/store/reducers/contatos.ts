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
      nome: 'Ruan Fernandes',
      categoria: enums.Categoria.FAMILIA,
      numero: '81994016226',
      email: 'ruanfernandes2592@gmail.com'
    },
    {
      id: 2,
      nome: 'Pedro Ivo',
      categoria: enums.Categoria.TRABALHO,
      numero: '83994018511',
      email: 'pedro123@gmail.com'
    },
    {
      id: 3,
      nome: 'Paulo Pontes',
      categoria: enums.Categoria.FAVORITOS,
      numero: '47994016524',
      email: 'paulo123456@gmail.com'
    },
    {
      id: 4,
      nome: 'Caio Moura',
      categoria: enums.Categoria.FAMILIA,
      numero: '83994018745',
      email: 'pedro123@gmail.com'
    },
    {
      id: 5,
      nome: 'Ana Paula',
      categoria: enums.Categoria.OUTROS,
      numero: '83994044575',
      email: 'ana123456789@gmail.com'
    },
    {
      id: 6,
      nome: 'Carolina Ramos',
      categoria: enums.Categoria.FAVORITOS,
      numero: '83994019975',
      email: 'carol123@gmail.com'
    },
    {
      id: 7,
      nome: 'João guilherme',
      categoria: enums.Categoria.OUTROS,
      numero: '83994046275',
      email: 'joao123@gmail.com'
    },
    {
      id: 8,
      nome: 'Marcos Polo',
      categoria: enums.Categoria.OUTROS,
      numero: '83955012275',
      email: 'marcos123@gmail.com'
    },
    {
      id: 9,
      nome: 'Humberto Silva',
      categoria: enums.Categoria.OUTROS,
      numero: '83900012275',
      email: 'humberto123@gmail.com'
    },
    {
      id: 10,
      nome: 'Pai',
      categoria: enums.Categoria.FAMILIA,
      numero: '83994012275',
      email: 'fernandes123@gmail.com'
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
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      //Vai buscar um contato onde o nome seja igual o nome digitado no input
      const nomeJaExiste = state.itens.find(
        (t) => t.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (nomeJaExiste || action.payload.nome.length < 1) {
        alert('Já existe um contato com este nome ou nome invalido')
      } else {
        //Vai buscar um contato onde o número seja igual o número digitado no input
        const numeroJaExiste = state.itens.find(
          (t) => t.numero === action.payload.numero
        )
        if (numeroJaExiste || action.payload.numero.length < 10) {
          alert('Já existe um contato com este número ou número invalido')
        } else {
          const ultimoContato = state.itens[state.itens.length - 1]

          const contatoNovo = {
            ...action.payload,
            id: ultimoContato ? ultimoContato.id + 1 : 1
          }
          state.itens.push(contatoNovo)
        }
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
