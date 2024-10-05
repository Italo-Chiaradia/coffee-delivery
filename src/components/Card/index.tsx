import {
  CardContainer,
  TagsContainer,
  TotalPrice,
  CoffeeAmount,
} from './styles'
import Coffee from '../../assets/coffee.png'
import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../Counter'

import { useCart } from '../../context/CartContext'
import { useState } from 'react'

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
  const { addItem } = useCart()

  const [quantity, setQuantity] = useState(1)
  function incrementQuantity() {
    setQuantity((state: number) => state + 1)
  }
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state: number) => state - 1)
    }
  }
  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setQuantity(1)
    alert(`${quantity}x ${coffee.title} foi adicionado no carrinho`)
  }

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
          <Counter
            increment={incrementQuantity}
            decrement={decrementQuantity}
            quantity={quantity}
          />
          <button title="Adicionar pedido" onClick={handleAddItem}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </CoffeeAmount>
      </footer>
    </CardContainer>
  )
}
