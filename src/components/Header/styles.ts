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

export const CartBtn = styled.a`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};

  cursor: pointer;
  transition: all .1s;
  &:hover {
    transform: scale(1.1);
  }
`
