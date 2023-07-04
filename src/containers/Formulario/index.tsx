import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contatos'
import { phoneNumberAutoFormat } from '../../utils/phoneNumberAutoFormat'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          id="test"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="E-mail do contato"
        />
        <Campo
          maxLength={14}
          value={telefone}
          onChange={(evento) => {
            const targetValue = phoneNumberAutoFormat(evento.target.value)
            setTelefone(targetValue)
          }}
          type="text"
          placeholder="Telefone do contato"
        />

        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
