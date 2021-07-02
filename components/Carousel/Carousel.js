// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components'
// import axios from 'axios';
// import { ContentClient } from 'dc-delivery-sdk-js';

// import Hero from '../Hero/Hero';

// const client = new ContentClient({
//   hubName: "sandbox-dev"
// });


// const SlideHolder = styled.div`
//     position: relative;
// `;

// const SlideInner = styled.div`
//     position: relative;
//     width: 100%;
//     overflow: hidden;
// `;

// const Slide = styled.div`
//     position: relative;
//     display: none;
//     float: left;
//     width: 100%;
//     margin-right: -100%;
//     -webkit-backface-visibility: hidden;
//     backface-visibility: hidden;
//     transition: transform .6s ease-in-out;

//     &.activated {
//         display: block;
//     }
// `;
   

// const Carousel = () => {

//   const REQUEST_STATUS = {
//     LOADING: 'loading',
//     SUCCESS: 'success',
//     ERROR: 'error',
//   };

//   const [status, setStatus] = useState(REQUEST_STATUS.LOADING);
//   const [error, setError] = useState({});
//   const [carousels, setCarousels] = useState([]);
//   const [slot, setSlot] = useState([]);
//   const [active, setActive] = useState(false)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await axios.get('https://sandbox-dev.cdn.content.amplience.net/content/id/2ea7590a-5546-494f-95e9-82910f25276c')
//         .then((response) => {
//             setSlot(response.data.content);
//             return response.data.content;
//         })
//         .then(async (slot) => {
//             for (const slotContent of slot.slotContent) {
//                 await axios.get(`https://sandbox-dev.cdn.content.amplience.net/content/id/${slotContent.id}`).then((response) => {
//                     setCarousels(hero => [...hero, response.data]);
//                 })
//            }
//            setStatus(REQUEST_STATUS.SUCCESS);
//         })
//       } catch (e) {
//         setStatus(REQUEST_STATUS.ERROR);
//         setError(e);
//       }
//     };
//     fetchData();
//   }, []);



//   const success = status === REQUEST_STATUS.SUCCESS;
//   const isLoading = status === REQUEST_STATUS.LOADING;
//   const hasErrored = status === REQUEST_STATUS.ERROR;

//   return (
      
//     <div>
//       {isLoading && <div>Loading...</div>}
//       {hasErrored && (
//         <div>
//           Loading error... Oops something went wrong...
//           <br />
//           <b>ERROR: {error.message}</b>
//         </div>
//       )}
//       <SlideHolder>
//         <SlideInner>
//         {success && (carousels.map((carousel, index)=>(
//             <Slide className={`${index===0? 'activated':''}`}>
//                   <Hero
//                       key={carousel.content._meta.deliveryId}
//                       {...carousel}
//                       cssClass="carousel"
//                   />
//             </Slide>
//           )))
//         }
//         </SlideInner>      
//       </SlideHolder>
//     </div>
//   )
// };

import styled from 'styled-components'

const CarouselHolder = styled.div`
  display: inline-flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const images = ['https://cdn.media.amplience.net/i/wigglecrcnonprd/homepageh1d','https://cdn.media.amplience.net/i/wigglecrcnonprd/homepage-h-d']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']


const Carousel = () => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = React.useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
    const refs = images.reduce((acc, val, i) => {
      acc[i] = React.createRef();
      return acc;
    }, {});

  const scrollToImage = i => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: 'smooth',
      //      Defines vertical alignment.
      block: 'nearest',
      //      Defines horizontal alignment.
      inline: 'start',
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = images.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    'absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = isLeft => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
      style={{ top: '40%' }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
        {isLeft ? '◀' : '▶'}
      </span>
    </button>
  );

  return (
  // Images are placed using inline flex. We then wrap an image in a div
  // with flex-shrink-0 to stop it from 'shrinking' to fit the outer div.
  // Finally the image itself will be 100% of a parent div. Outer div is
  // set with position relative, so we can place our cotrol buttons using
  // absolute positioning on each side of the image.
  <div className="w-full flex justify-center">
    <div className="flex justify-center w-full  items-center">
      <div className="relative w-full">
        <CarouselHolder>
          {sliderControl(true)}
          {images.map((img, i) => (
            <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
              <img src={img} className="w-full object-contain" />
            </div>
          ))}
          {sliderControl()}
        </CarouselHolder>
      </div>
    </div>
  </div>
  );
};






export default Carousel;
