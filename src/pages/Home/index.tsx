/* eslint-disable @stylistic/max-len */
import { HomeContainer, HeroContainer, ProductsContainer, Features, FeatureItem } from './styles.ts'
import HeroImg from '../../assets/intro-coffee-img.png'
import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react'
import { Card } from '../../components/Card/index.tsx'
export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <Features>
            <FeatureItem variant="yellow-dark">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </FeatureItem>
            <FeatureItem variant="base-text">
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </FeatureItem>
            <FeatureItem variant="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </FeatureItem>
            <FeatureItem variant="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </FeatureItem>
          </Features>
        </div>
        <img src={HeroImg} alt="Imagem de decorativa de um copo de café" />
      </HeroContainer>
      <ProductsContainer>
        <h2>Nossos cafés</h2>
        <div>
          <Card />
          <Card />
          <Card />
          <Card />

          <Card />
          <Card />
          <Card />
          <Card />

          <Card />
          <Card />
          <Card />
          <Card />

          <Card />
          <Card />
        </div>
      </ProductsContainer>
    </HomeContainer>
  )
}
