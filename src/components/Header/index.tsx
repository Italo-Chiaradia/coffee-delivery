import { HeaderContainer, Location, CartBtn } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

export function Header() {
  const { cart } = useCart()
  const cartLength = cart.reduce((accumulator, current) => {
    return accumulator + current.quantity
  }, 0)
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
        <NavLink to="/cart" title="Finalize seu pedido">
          <CartBtn quantityCart={cartLength}>
            <ShoppingCart size={22} weight="fill" />
          </CartBtn>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
