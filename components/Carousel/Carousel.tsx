import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'

import Hero, { HeroProps } from '../Hero/Hero'

export interface CarouselListProps {
  heroBannerList: HeroProps[]
}

const StyledCarouselItem = styled(Carousel.Item)`
  -webkit-transition: -webkit-transform 0s ease-in-out;
  -o-transition: -o-transform 0s ease-in-out;
  transition: transform 0s ease-in-out;
`

export default function Carousels({ heroBannerList }: CarouselListProps) {
  return (
    <div>
      <Carousel controls nextLabel="" prevLabel="" slide indicators>
        {heroBannerList.map((hero: HeroProps) => (
          <StyledCarouselItem key={hero._meta.deliveryId}>
            <Hero {...hero} cssClass="carousel item" />
          </StyledCarouselItem>
        ))}
      </Carousel>
    </div>
  )
}
