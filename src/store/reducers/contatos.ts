import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Strygwyr, the Bloodseeker',
      email: 'bloodseeker@mail.com',
      telefone: '(11)91111-4444'
    },
    {
      id: 2,
      nome: 'Purist Thunderwrath, the Omniknight',
      email: 'omniknight@mail.com',
      telefone: '(11)92222-4444'
    },
    {
      id: 3,
      nome: 'Darkterror, the Faceless Void',
      email: 'facelessvoid@mail.com',
      telefone: '(11)93333-4444'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNova = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
