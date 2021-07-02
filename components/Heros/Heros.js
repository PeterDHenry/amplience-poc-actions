import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Hero from '../Hero/Hero';

const Heros = () => {

  const [hero, setHero] = useState([]);

  const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
  };

  const [status, setStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sandbox-dev.cdn.content.amplience.net/content/id/246fcf09-a2ba-48fa-ae82-7228505e00f5');//7500503b-6303-4379-a14c-a3f9d7920f92 https://javascript.plainenglish.io/useaxios-a-react-hook-for-using-axios-c798762d1a13
        setHero(response.data);
        setStatus(REQUEST_STATUS.SUCCESS);
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
      {success && (
        <div className="">
              <Hero
                key={hero.content._meta.deliveryId}
                {...hero}
              />
        </div>
      )}
    </div>
  );
};
export default Heros;
