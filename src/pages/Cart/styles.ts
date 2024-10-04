import styled from 'styled-components'

export const CartContainer = styled.div`
  padding-inline: 10rem;
  display: flex;
  align-items: start;
  gap: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 91px;
`

export const Wrapper = styled.div`
  > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: .9rem;
  }
  > div {
    background-color: ${({ theme }) => theme['base-card']};
    padding: 2.5rem;
  }
  > div + div {
    margin-top: .75rem;
  }

`

export const OrderDetailsWrapper = styled(Wrapper)`
  width: 40rem;

`

export const OrderConfirmationWrapper = styled(Wrapper)`
  width: 28rem;
  > div {
    border-radius: 6px 44px 6px 44px;
    > a > button {
      width: 100%;
      background-color: ${({ theme }) => theme.yellow};
      border-radius: 6px;
      border: none;
      padding-block: 12px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.white};
      font-size: .875rem;
      font-weight: bold;
      cursor: pointer;
      transition: all .1s;
      &:hover {
        background-color: ${({ theme }) => theme['yellow-dark']};
      }
    }
    > div + div {
      border-top: 1px solid ${({ theme }) => theme['base-button']}
    } 
  }

`

export const InputGroup = styled.div`
  > header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    gap: .5rem;
    h3 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3;
      color: ${({ theme }) => theme['base-subtitle']}
    }
    p {
      font-size: .875rem;
    }
  }
`

export const AddressInputGroup = styled(InputGroup)`
  > header > svg {
    color: ${({ theme }) => theme['yellow-dark']}
  }
  > div {
    display: flex;
    gap: .75rem;
  }
  > div + div {
    margin-top: 1rem;
  }
  select {
    background-color: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    padding: .75rem;
    font-size: .875rem;
  }
  select.placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`

type Sizes = 'medium' | 'large'

interface InputProps {
  variant: Sizes
}

const VariantSize = {
  medium: 0,
  large: 1,
}

export const Input = styled.input<InputProps>`
  flex: ${({ variant }) => VariantSize[variant]};
  background-color: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: .25rem;
  padding: .75rem;
  font-size: .875rem;
  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`

export const PaymentInputGroup = styled(InputGroup)`
  > header > svg {
    color: ${({ theme }) => theme.purple}
  }
`

export const RadioButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  > div {
    width: 100%;
    border: 1px solid ${({ theme }) => theme['base-button']};
    background-color: ${({ theme }) => theme['base-button']};
    border-radius: 6px;
    &:hover {
      background-color: ${({ theme }) => theme['base-hover']};
    }
  }
  > div:focus-within {
    background-color: ${({ theme }) => theme['purple-light']};
    border: 1px solid ${({ theme }) => theme.purple};
  }
  > div > label {
    cursor: pointer;  
    padding: 1rem; 
    display: flex;
    align-items: center;
    gap: .75rem;
    font-size: .75rem;
    line-height: 1.6;
    text-transform: uppercase;
    text-wrap: nowrap;
  }
  > div > label > svg {
    color: ${({ theme }) => theme.purple};
  }
  > div > input {
    position: absolute; 
    opacity: 0; 
    pointer-events: none; 
  }
`

export const OrderPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  padding-block: 1.5rem;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      font-size: .875rem;
    }
  }
  > div:last-child {
    > span {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${({ theme }) => theme['base-subtitle']}
    }

  }
`
