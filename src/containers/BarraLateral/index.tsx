import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { Botao, Campo } from '../../styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
            />
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>
            Voltar a lista de contatos{' '}
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
