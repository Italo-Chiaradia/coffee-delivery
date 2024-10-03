import {
  CardContainer,
  TagsContainer,
  TotalPrice,
  CoffeeAmount,
} from './styles'
import Coffee from '../../assets/coffee.png'
import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../Counter'

export function Card() {
  return (
    <CardContainer>
      <img src={Coffee} alt="Xícara de café preto" />

      <TagsContainer>
        <span>tradicional</span>
      </TagsContainer>

      <h3>
        Expresso Tradicional
      </h3>
      <p>
        O tradicional café feito com água quente e grãos moídos
      </p>

      <footer>
        <TotalPrice>
          R$
          <span> 9,90</span>
        </TotalPrice>
        <CoffeeAmount>
          <Counter />
          <button title="Adicionar pedido">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CoffeeAmount>
      </footer>
    </CardContainer>
  )
}
