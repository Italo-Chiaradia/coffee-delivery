import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};

  > button {
    display: flex;
    align-items: center;
    border: none;
    background: inherit;
    color: ${({ theme }) => theme.purple};
    cursor: pointer;
    transition: all .1s;
    
    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
  > span {
    color: ${({ theme }) => theme['base-title']};
  }

`
