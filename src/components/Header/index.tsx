import { HeaderContainer, Location, CartBtn } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Página principal">
        <img src={logoCoffeeDelivery} />
      </NavLink>
      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <NavLink to="/checkout" title="Finalize seu pedido">
          <CartBtn>
            <ShoppingCart size={22} weight="fill" />
          </CartBtn>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
