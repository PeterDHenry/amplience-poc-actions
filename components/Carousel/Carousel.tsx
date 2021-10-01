import React from 'react'
import styled from 'styled-components'
import bsCarousel from 'react-bootstrap/Carousel'
import { Hero } from '../Hero/Hero'
import { HeroProps } from '../Hero/types'
import { CarouselProps } from './types'

const StyledCarouselItem = styled(bsCarousel.Item)`
  -webkit-transition: -webkit-transform 0s ease-in-out;
  -o-transition: -o-transform 0s ease-in-out;
  transition: transform 0s ease-in-out;
`

const StyledCarouselWithIndicators = styled(bsCarousel)`
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

export const Carousel = ({ heroBannerList }: CarouselProps) => {
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
