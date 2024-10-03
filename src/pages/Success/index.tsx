import { SuccessContainer, DeliveryInfo } from './styles'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import DeliveryIllustration from '../../assets/delivery-illustration.png'

export function Success() {
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
              Entrega em {' '}
              <strong>Rua João Daniel Martinelli, 102</strong> <br />
              Farrapos - Porto Alegre, RS
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
              <strong>Cartão de crédito</strong>
            </span>
          </DeliveryInfo>
        </div>
      </div>
      <img src={DeliveryIllustration} />
    </SuccessContainer>
  )
}
