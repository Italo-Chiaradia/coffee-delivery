import {
  CardContainer,
  TagsContainer,
  TotalPrice,
  CoffeeAmount,
} from './styles'
import Coffee from '../../assets/coffee.png'
import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../Counter'

interface Props {
  coffee: {
    id: string,
    title: string,
    description: string,
    tags: string[],
    price: number
  }
}

export function Card({ coffee }: Props) {
  return (
    <CardContainer>
      <img src={Coffee} alt={coffee.title} />

      <TagsContainer>
        {
          coffee.tags.map(name => {
            return (
              <span key={name}>
                {name}
              </span>
            )
          })
        }
      </TagsContainer>

      <h3>
        {coffee.title}
      </h3>
      <p>
        {coffee.description}
      </p>

      <footer>
        <TotalPrice>
          R${' '}
          <span>
            {
              coffee
                .price
                .toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
            }
          </span>
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
