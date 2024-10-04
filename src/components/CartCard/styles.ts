import styled from 'styled-components'

export const CartCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-block: 2rem;
  &:first-child {
    padding-top: 0;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    > img {
      width: 4rem;
      height: 4rem;
    }
  }
  h3 {
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
    font-weight: 400;
  } 
  strong {
    font-size: 1rem;
  }
  
`

export const TitleButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  > div {
    display: flex;
    gap: .5rem;

    > button {
      display: flex;
      align-items: center;
      gap: .25rem;
      padding: .5rem;
      border-radius: 6px;

      text-transform: uppercase;
      font-size: .75rem;
      line-height: 1.6;
      border: none;
      background-color: ${({ theme }) => theme['base-button']};
      cursor: pointer;
      transition: all .2s;

      > svg {
        color: ${({ theme }) => theme.purple}
      }

      &:hover {
        background-color: ${({ theme }) => theme['base-hover']};
      }
    }
  }

`
