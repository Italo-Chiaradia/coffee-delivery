import { SuccessContainer, DeliveryInfo } from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import DeliveryIllustration from '../../assets/delivery-illustration.png'
import { useCart } from '../../context/CartContext'
import { useParams } from 'react-router-dom'

export function Success() {
  const { orders } = useCart()
  const { id } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(id))

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div className="gradient-border">
          <DeliveryInfo variant="purple">
            <span className="icon-container">
              <MapPin size={16} weight="fill" />
            </span>
            <span>
              <span>
                Entrega em{' '}
                <strong>
                  {orderInfo?.street}, {orderInfo?.number}
                </strong>
              </span>
              <span>
                {orderInfo?.neighborhood} - {orderInfo?.city},{orderInfo?.state}
              </span>
            </span>
          </DeliveryInfo>
          <DeliveryInfo variant="yellow">
            <span className="icon-container">
              <Timer size={16} weight="fill" />
            </span>
            <span>
              Previsão de entrega <br />
              <strong>20 min - 30 min</strong>
            </span>
          </DeliveryInfo>
          <DeliveryInfo variant="yellow-dark">
            <span className="icon-container">
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <span>
              Pagamento na entrega <br />
              <strong>{paymentMethod[orderInfo?.paymentMethod]}</strong>
            </span>
          </DeliveryInfo>
        </div>
      </div>
      <img src={DeliveryIllustration} />
    </SuccessContainer>
  )
}
