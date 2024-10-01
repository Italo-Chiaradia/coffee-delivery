import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding-inline: 10rem;
  display: flex;
  flex-direction: column;

`

export const HeroContainer = styled.div`
  padding-block: 92px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3.6rem;
  > div {
    > h1 {
      font-family: 'Baloo 2', sans-serif;
      color: ${({ theme }) => theme['base-title']};
      font-size: 3rem;
      line-height: 1.3
    }
    > p {
      margin-top: 1rem;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme['base-subtitle']};
      font-size: 1.25rem;
      line-height: 1.3
    }
  }
`

export const Features = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 40px;
`

export type ColorVariant = 'yellow-dark' | 'yellow' | 'base-text' | 'purple'

interface FeatureItemProps {
  variant: ColorVariant;
}

export const FeatureItem = styled.span<FeatureItemProps>`
  display: flex;
  align-items: center;
  gap: .75rem;
  > span {
    display: grid;
    place-items: center;
    background-color: ${({ theme, variant }) => theme[variant]};
    color: ${({ theme }) => theme.background};
    padding: 10px;
    border-radius: 50%;
  }
`

export const ProductsContainer = styled.div`
  padding-block: 2rem;
  > h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 3.4rem;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit,  16rem);
    justify-content: center;
    column-gap: 2rem;
    row-gap: 2.5rem;
    /* justify-content: space-between; */
  }
  
`
