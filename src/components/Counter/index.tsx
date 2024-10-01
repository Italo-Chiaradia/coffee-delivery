import { CounterContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus size={14} weight="bold" />
      </button>
      <span>
        1
      </span>
      <button>
        <Plus size={14} weight="bold" />
      </button>
    </CounterContainer>
  )
}
