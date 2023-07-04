import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `"${termo}"` : ''

    mensagem = `${quantidade} contato(s) encontrado(s) como: ${complementacao}`
    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)
  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              email={c.email}
              telefone={c.telefone}
              nome={c.nome}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
