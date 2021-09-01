import { fireEvent, render } from '@testing-library/react'
import Carousel, { CarouselListProps } from './Carousel'
import '@testing-library/jest-dom'

describe('Carousel component', () => {
  test('Matches snapshot', () => {
    const { asFragment } = render(<Carousel {...carouselListProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  test('Check if the Carousel is active and working correctly', () => {
    render(<Carousel {...carouselListProps} />, {})
    const carouselItems =
      document.getElementsByClassName('carousel-item').length
    expect(carouselItems).toBeGreaterThan(0)
    expect(carouselItems).toBeGreaterThan(1)
  })

  test('Check if Carousel controls are working', () => {
    render(<Carousel {...carouselListProps} />, {})
    const carouselItems =
      document.getElementsByClassName('carousel-item').length
    if (carouselItems > 1) {
      const prevControl = document.querySelector('.carousel-control-prev')
      const nextControl = document.querySelector('.carousel-control-next')
      const carouselIndicators = document.querySelector('.carousel-indicators')

      expect(prevControl).toBeDefined()
      expect(nextControl).toBeDefined()
      expect(carouselIndicators).toBeInTheDocument()

      for (let i = 0; i < carouselItems; i++) {
        let carouselItem = document.getElementsByClassName('carousel-item')[i]
        let itemClass = carouselItem.getAttribute('class')
        console.log(itemClass)
        //console.log(i, itemClass)
        /*expect(itemClass).toBe(
          'Carousel__StyledCarouselItem-sc-1y7w2xj-0 jYiBRo active carousel-item'
        )*/
        fireEvent.click(nextControl)
      }
    }
  })
})

// delivery ID different as used fr key in loop
// deliveryId: String(Math.floor(Math.random() * 20)) snapshot will fail
const carouselListProps: CarouselListProps = {
  heroBannerList: [
    {
      _meta: {
        name: 'string',
        schema: 'string',
        deliveryId: '1543512973',
      },
      cssClass: '',
      background: { name: 'homepage-h-d' },
      color: 'white',
      contrastColor: 'dark',
      textAndCTA: {
        callToActionURL: 'https://www.wiggle.co.uk/discover-different',
        headline: 'Default headline',
        strapline: 'Default Strapline',
        callToActionText: 'Default call to action',
      },
    },
    {
      _meta: {
        name: 'string',
        schema: 'string',
        deliveryId: '1237612',
      },
      cssClass: '',
      background: { name: 'homepage-h-d' },
      color: 'white',
      contrastColor: 'dark',
      textAndCTA: {
        callToActionURL: 'https://www.wiggle.co.uk/discover-different',
        headline: 'Default headline',
        strapline: 'Default Strapline',
        callToActionText: 'Default call to action',
      },
    },
    {
      _meta: {
        name: 'string',
        schema: 'string',
        deliveryId: '983492387',
      },
      cssClass: '',
      background: { name: 'homepage-h-d' },
      color: 'white',
      contrastColor: 'dark',
      textAndCTA: {
        callToActionURL: 'https://www.wiggle.co.uk/discover-different',
        headline: 'Default headline',
        strapline: 'Default Strapline',
        callToActionText: 'Default call to action',
      },
    },
  ],
}
