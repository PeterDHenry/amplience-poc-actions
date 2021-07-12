import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

import Hero from '../Hero/Hero';

const StyledCarouselItem= styled(Carousel.Item)`
  -webkit-transition: -webkit-transform 0s ease-in-out;
   -o-transition: -o-transform 0s ease-in-out;
   transition: transform 0s ease-in-out;`

export default function Carousels ({ homeSlot }) {

  const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
  };

  const [status, setStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState({});
  const [carousels, setCarousels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let success = false
      try {
        for (const slotContent of homeSlot.content.heroBannerList) {
          await axios.get(`https://sandbox-dev.cdn.content.amplience.net/content/id/${slotContent.id}`).then((response) => {
            setCarousels(hero => [...hero, response.data]);
            success = true
          })
        }
        if ( success ) { setStatus(REQUEST_STATUS.SUCCESS) }
      } catch (e) {
        setStatus(REQUEST_STATUS.ERROR);
        setError(e);
      }
    };
    fetchData();
  }, []);

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const hasErrored = status === REQUEST_STATUS.ERROR;

  return (
      
    <div>
      {isLoading && <div>Loading...</div>}
      {hasErrored && (
        <div>
          Loading error... Oops something went wrong...
          <br />
          <b>ERROR: {error.message}</b>
        </div>
      )}
      <Carousel controls nextLabel="" prevLabel="" slide controls indicators>
        {success && (carousels.map((carousel)=>(
            <StyledCarouselItem  key={carousel.content._meta.deliveryId}>
              <Hero
                {...carousel}
                cssClass="carousel item"
              />
            </StyledCarouselItem>
          )))
        }   
      </Carousel>
    </div>
  )
};

