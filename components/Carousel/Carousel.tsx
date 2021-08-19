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

const StyledCarouselWithIndicators = styled(Carousel)`
  .carousel-indicators li {
    background-color: #fff;
    height: 15px;
    width: 40px;
    margin-left: 10px;
  }

  .carousel-indicators .active {
    background-color: #ff920b;
  }
`

export default function Carousels({ heroBannerList }: CarouselListProps) {
  return (
    <div>
      <StyledCarouselWithIndicators
        controls
        nextLabel=""
        prevLabel=""
        slide
        indicators
      >
        {heroBannerList.map((hero: HeroProps) => (
          <StyledCarouselItem key={hero._meta.deliveryId}>
            <Hero {...hero} cssClass="carousel item" />
          </StyledCarouselItem>
        ))}
      </StyledCarouselWithIndicators>
    </div>
  )
}
