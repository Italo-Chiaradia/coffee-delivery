import { HeaderContainer, Location, CartBtn } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} />
      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <CartBtn>
          <ShoppingCart size={22} weight="fill" />
        </CartBtn>
      </div>
    </HeaderContainer>
  )
}
