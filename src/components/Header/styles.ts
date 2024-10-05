import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    gap: .75rem;
  }

`

export const Location = styled.span`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;

  gap: 4px;

  background-color: ${({ theme }) => theme['purple-light']};
  color: ${({ theme }) => theme['purple-dark']};
  font-size: 0.875rem;
  > svg {
    color: ${({ theme }) => theme.purple};
  }
`

interface CartBtnProps {
  quantityCart: number,
}

export const CartBtn = styled.button<CartBtnProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  border: none;
  background-color: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};

  cursor: pointer;
  transition: all .1s;
  &:hover {
    transform: scale(1.1);
  }

  &::after {
    content: "${({ quantityCart }) => `${quantityCart}`}";
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${({ theme }) => theme['yellow-dark']};
    border-radius: 50%;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    font-size: .75rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ quantityCart }) => quantityCart};
  }
`
