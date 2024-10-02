import Coffee from '../../assets/coffee.png'
import { Trash } from 'phosphor-react'
import { Counter } from '../Counter'
import { CheckoutCardContainer, TitleButtonsContainer } from './styles'

export function CheckoutCard() {
  return (
    <CheckoutCardContainer>
      <div>
        <img src={Coffee} alt="Xícara de café preto" />
        <TitleButtonsContainer>
          <h3>Expresso Tradicional</h3>
          <div>
            <Counter />
            <button>
              <Trash size={16} />
              Remover
            </button>
          </div>
        </TitleButtonsContainer>
      </div>

      <strong>
        R$ 19,80
      </strong>
    </CheckoutCardContainer>
  )
}
