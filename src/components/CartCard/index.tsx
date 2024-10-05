import Coffee from '../../assets/coffee.png'
import { Trash } from 'phosphor-react'
import { Counter } from '../Counter'
import { CartCardContainer, TitleButtonsContainer } from './styles'
import { useCart } from '../../context/CartContext'
import { useState } from 'react'

interface Props {
  coffee: {
    id: string,
    title: string,
    description: string,
    tags: string[],
    price: number,
    image: string
  }
}

export function CartCard({ coffee }: Props) {
  const {
    cart,
    removeItem,
    incrementItemQuantity,
    decrementItemQuantity,
  } = useCart()

  const currentQuantity = cart.find(item => item.id === coffee.id)?.quantity

  const [quantity, setQuantity] = useState(currentQuantity as number)

  function incrementQuantity() {
    setQuantity((state: number) => state + 1)
    incrementItemQuantity(coffee.id)
  }
  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state: number) => state - 1)
      decrementItemQuantity(coffee.id)
    }
  }
  function handleRemoveItem() {
    removeItem(coffee.id)
  }
  return (
    <CartCardContainer>
      <div>
        <img src={Coffee} alt={coffee.title} />
        <TitleButtonsContainer>
          <h3>{coffee.title}</h3>
          <div>
            <Counter
              quantity={quantity}
              increment={incrementQuantity}
              decrement={decrementQuantity}
            />
            <button onClick={handleRemoveItem}>
              <Trash size={16} />
              Remover
            </button>
          </div>
        </TitleButtonsContainer>
      </div>

      <strong>
        R${' '}
        {
          (coffee.price * quantity)
            .toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
        }
      </strong>
    </CartCardContainer>
  )
}
