import React from 'react';
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'

import Hero from '../Hero/Hero';

const StyledCarouselItem= styled(Carousel.Item)`
-webkit-transition: -webkit-transform 0s ease-in-out;
-o-transition: -o-transform 0s ease-in-out;
transition: transform 0s ease-in-out;`

export default function Carousels ({ heroBannerList }) {
  
  return ( 
    <div>
      <Carousel controls nextLabel="" prevLabel="" slide controls indicators>
        {(heroBannerList.map((carousel)=>(
          <StyledCarouselItem  key={carousel._meta.deliveryId}>
            <Hero {...carousel}
                  cssClass="carousel item"
            />
          </StyledCarouselItem>
        )))}   
      </Carousel>
    </div>
    )
  };
  
  