import { render } from '@testing-library/react'
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

  test('Check if Carousel controls are defined when more than 1 hero image', () => {
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
    }
  })

  test('Check if props are assigned correctly', () => {
    const { container } = render(<Carousel {...carouselListProps} />, {})

    const hero1Img = container.querySelector('.carousel-item:nth-child(1) img')
    const hero1ImgSrc = hero1Img?.getAttribute('data-src')

    const hero1Link = container.querySelector('.carousel-item:nth-child(1) a')
    const hero1LinkHref = hero1Link?.getAttribute('href')

    const hero1H2 = container.querySelector(
      '.carousel-item:nth-child(1) a .container h2'
    )?.textContent

    const hero1H3 = container.querySelector(
      '.carousel-item:nth-child(1) a .container h3'
    )?.textContent
    const hero1Cta = container.querySelector(
      '.carousel-item:nth-child(1) a .container .btn'
    )?.textContent

    expect(hero1ImgSrc).toMatch(
      carouselListProps.heroBannerList[0].background.name
    )
    expect(hero1LinkHref).toMatch(
      carouselListProps.heroBannerList[0].textAndCTA.callToActionURL
    )
    expect(hero1H2).toMatch(
      carouselListProps.heroBannerList[0].textAndCTA.headline
    )
    expect(hero1H3).toMatch(
      carouselListProps.heroBannerList[0].textAndCTA.strapline
    )
    expect(hero1Cta).toMatch(
      carouselListProps.heroBannerList[0].textAndCTA.callToActionText
    )
  })
})

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
