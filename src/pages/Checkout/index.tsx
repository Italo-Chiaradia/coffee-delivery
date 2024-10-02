/* eslint-disable @stylistic/max-len */
import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { CheckoutCard } from '../../components/CheckoutCard'
import {
  CheckoutContainer,
  OrderDetailsWrapper,
  OrderConfirmationWrapper,
  AddressInputGroup,
  PaymentInputGroup,
  Input,
  RadioButtonsContainer,
  OrderPrice,
} from './styles'
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

export function Checkout() {
  const [selectedUF, setSelectedUF] = useState('')
  const ufs = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
    'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
    'SP', 'SE', 'TO',
  ]
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUF(event.target.value)
  }
  return (
    <>
      <Header />
      <CheckoutContainer>
        <OrderDetailsWrapper>
          <h2>Complete seu pedido</h2>
          <AddressInputGroup>
            <header>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>
            <div>
              <Input variant="medium" type="text" placeholder="CEP" required />
            </div>

            <div>
              <Input variant="large" type="text" placeholder="Rua" required />
            </div>

            <div>
              <Input variant="medium" type="number" placeholder="Número" required />
              <Input variant="large" type="text" placeholder="Complemento (opcional)" />
            </div>

            <div>
              <Input variant="medium" type="text" placeholder="Bairro" required />
              <Input variant="large" type="text" placeholder="Cidade" required />
              <select
                required
                value={selectedUF}
                onChange={handleChange}
                className={!selectedUF
                  ? 'placeholder'
                  : ''}
              >
                <option value="" disabled>UF</option>
                {ufs.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </select>
            </div>

          </AddressInputGroup>

          <PaymentInputGroup>
            <header>
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja pagar
                </p>
              </div>
            </header>
            <RadioButtonsContainer>
              <div>
                <input
                  type="radio"
                  id="credit"
                  value="credit"
                  name="payment"
                />
                <label htmlFor="credit">
                  <CreditCard size={16} /> Cartão de Crédito
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="debit"
                  value="debit"
                  name="payment"
                />
                <label htmlFor="debit">
                  <Bank size={16} /> Cartão de Débito
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="cash"
                  value="cash"
                  name="payment"
                />
                <label htmlFor="cash">
                  <Money size={16} /> Dinheiro
                </label>
              </div>
            </RadioButtonsContainer>

          </PaymentInputGroup>
        </OrderDetailsWrapper>

        <OrderConfirmationWrapper>
          <h2>Cafés selecionados</h2>
          <div>
            <CheckoutCard />
            <CheckoutCard />

            <OrderPrice>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </OrderPrice>

            <button>
              confirmar pedido
            </button>
          </div>
        </OrderConfirmationWrapper>
      </CheckoutContainer>
    </>
  )
}
