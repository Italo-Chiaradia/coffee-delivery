import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  padding: 20px 24px;
  background-color: ${({ theme }) => theme['base-card']};
  text-align: center;
  border-radius: 6px 36px;
  > img {
    border-radius: 50%;
    margin-top: -2.5rem;
    margin-bottom: .75rem;
  }
  > h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: .5rem;
  }
  > p {
    font-size: .875rem;
    color: ${({ theme }) => theme['base-label']};
    margin-bottom: 2rem;
  }
  > footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
  margin-bottom: 1rem;
  > span {
    font-size: .625rem;
    padding: 4px 8px;
    font-weight: bold;
    background-color: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    border-radius: 100px;
    text-transform: uppercase;
  }
`

export const TotalPrice = styled.div`
  > span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 900
  }
`

export const CoffeeAmount = styled.div`
  display: flex;
  gap: .5rem;
  > button {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme['purple-dark']};
    color: ${({ theme }) => theme['base-card']};
    padding: .5rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all .1s;
    
    &:hover {
      background-color: ${({ theme }) => theme.purple};
    }
  }
`
