import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding-inline: 10rem;
  display: flex;
  padding-top: 4rem;
  gap: 6rem; 
  justify-content: center;
  align-items: flex-end;
  > div {
    > h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      font-weight: 900;
      color: ${({ theme }) => theme['yellow-dark']}
    }
    > p {
      font-size: 1.25rem;
      color: ${({ theme }) => theme['base-subtitle']}
    }
    > div {
      margin-top: 2.5rem;
      padding: 2.5rem;
      border: 1px solid ${({ theme }) => theme.purple};
      border-radius: 6px 36px;
      > div + div {
        margin-top: 2rem;
      }
    }
    
  }
`

export type ColorVariant = 'yellow-dark' | 'yellow' | 'base-text' | 'purple'

interface DeliveryInfoProps {
  variant: ColorVariant;
}

export const DeliveryInfo = styled.div<DeliveryInfoProps>`
  display: flex;
  align-items: center;
  gap: .75rem;
  > .icon-container {
    padding: .5rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme, variant }) => theme[variant]};
    color: ${({ theme }) => theme.background};
  }
`
