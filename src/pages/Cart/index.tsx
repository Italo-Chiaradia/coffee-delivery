/* eslint-disable @stylistic/max-len */
import { CartCard } from '../../components/CartCard'
import {
  CartContainer,
  OrderDetailsWrapper,
  OrderConfirmationWrapper,
  AddressInputGroup,
  PaymentInputGroup,
  Input,
  RadioButtonsContainer,
  OrderPrice,
  ErrorMessage,
} from './styles'
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useCart } from '../../context/CartContext'
import { coffees } from '../../../data.json'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

type FormInputs = {
  cep: string,
  street: string,
  number: string,
  fullAddress: string,
  neighborhood: string,
  city: string,
  state: string,
  paymentMethod: 'credit' | 'debit' | 'cash',
}

const newOrder = z.object({
  cep: z.string()
    .min(11, 'O CEP deve ter no mínimo 8 dígitos')
    .max(11, 'O CEP deve ter no máximo 8 dígitos')
    .regex(/^\d+$/, 'O CEP deve conter apenas números'),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5

export function Cart() {
  const { cart, checkout } = useCart()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }
    checkout(data)
  }

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find(coffee => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalPrice = coffeesInCart.reduce((accumulator, current) => {
    return accumulator + (current.quantity * current.price)
  }, 0)

  return (
    <CartContainer>
      <OrderDetailsWrapper id="orderForm" onSubmit={handleSubmit(handleOrderCheckout)}>
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
            <Input
              variant="medium"
              className={
                  errors.cep
                    ? 'invalid'
                    : 'default'
              }
            >
              <input
                type="text"
                placeholder="CEP"
                {...register('cep')}
              />
              {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
            </Input>
          </div>

          <div>
            <Input
              variant="large"
              className={
                errors.street
                  ? 'invalid'
                  : 'default'
              }
            >
              <input
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
              {errors.street && <ErrorMessage>{errors.street.message}</ErrorMessage>}
            </Input>

          </div>

          <div>
            <Input
              variant="medium"
              className={
                errors.number
                  ? 'invalid'
                  : 'default'
              }
            >
              <input
                type="number"
                placeholder="Número"
                {...register('number')}
              />
              {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
            </Input>
            <Input
              variant="large"
            >
              <input
                type="text"
                placeholder="Complemento (opcional)"
                {...register('fullAddress')}
              />
            </Input>
          </div>

          <div>
            <Input
              variant="medium"
              className={
                errors.neighborhood
                  ? 'invalid'
                  : 'default'
              }
            >
              <input
                type="text"
                placeholder="Bairro"
                {...register('neighborhood')}
              />
              {errors.neighborhood && <ErrorMessage>{errors.neighborhood.message}</ErrorMessage>}
            </Input>
            <Input
              variant="large"
              className={
                errors.city
                  ? 'invalid'
                  : 'default'
              }
            >
              <input
                type="text"
                placeholder="Cidade"
                {...register('city')}
              />
              {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
            </Input>
            <Input
              variant="small"
              className={
                errors.state
                  ? 'invalid'
                  : 'default'
              }
            >
              <input
                type="text"
                placeholder="UF"
                {...register('state')}
              />
              {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
            </Input>
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
                {...register('paymentMethod')}
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
                {...register('paymentMethod')}
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
                {...register('paymentMethod')}
              />
              <label htmlFor="cash">
                <Money size={16} /> Dinheiro
              </label>
            </div>
          </RadioButtonsContainer>
          {errors.paymentMethod && <ErrorMessage>{errors.paymentMethod.message}</ErrorMessage>}

        </PaymentInputGroup>
      </OrderDetailsWrapper>

      <OrderConfirmationWrapper>
        <h2>Cafés selecionados</h2>
        <div>
          {
            coffeesInCart?.map(coffee => {
              return (
                <CartCard
                  key={coffee.id}
                  coffee={coffee}
                />
              )
            })
          }

          <OrderPrice>
            <div>
              <span>Total de itens</span>
              <span>
                R$  {
                  totalPrice.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                }
              </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>
                R$  {
                  shippingPrice.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                  }
              </span>
            </div>
            <div>
              <span>Total</span>
              <span>
                R$ {
                  (totalPrice + 3.5).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                }
              </span>
            </div>
          </OrderPrice>

          {/* <NavLink to="/success"> */}
          <button type="submit" form="orderForm">
            confirmar pedido
          </button>
          {/* </NavLink> */}
        </div>
      </OrderConfirmationWrapper>
    </CartContainer>
  )
}
