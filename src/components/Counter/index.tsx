import { CounterContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'

interface CounterProps {
  quantity: number,
  increment: () => void,
  decrement: () => void,
}

export function Counter({ quantity, increment, decrement }: CounterProps) {
  return (
    <CounterContainer>
      <button onClick={decrement}>
        <Minus size={14} weight="bold" />
      </button>
      <span>
        {quantity}
      </span>
      <button onClick={increment}>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
