import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { ContentClient } from 'dc-delivery-sdk-js';
import Carousel from 'react-bootstrap/Carousel'

import Hero from '../Hero/Hero';

const client = new ContentClient({
  hubName: "sandbox-dev"
}); 

const Carousels = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
  };

  const [status, setStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState({});
  const [carousels, setCarousels] = useState([]);
  const [slot, setSlot] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get('https://sandbox-dev.cdn.content.amplience.net/content/id/2ea7590a-5546-494f-95e9-82910f25276c')
        .then((response) => {
            setSlot(response.data.content);
            return response.data.content;
        })
        .then(async (slot) => {
            for (const slotContent of slot.slotContent) {
                await axios.get(`https://sandbox-dev.cdn.content.amplience.net/content/id/${slotContent.id}`).then((response) => {
                    setCarousels(hero => [...hero, response.data]);
                })
           }
           setStatus(REQUEST_STATUS.SUCCESS);
        })
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
      <Carousel controls nextLabel prevLabel slide controls indicators>
        {success && (carousels.map((carousel)=>(
            <Carousel.Item>
              <Hero
                  key={carousel.content._meta.deliveryId}
                  {...carousel}
                  cssClass="carousel"
              />
            </Carousel.Item>
          )))
        }   
      </Carousel>
    </div>
  )
};

export default Carousels;
