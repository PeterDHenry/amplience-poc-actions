import { render } from '@testing-library/react'
import Carousel, { CarouselListProps } from './Carousel'

describe('Carousel component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Carousel {...carouselListProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

// delivery ID different as used fr key in loop
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
      calltoactionurl: 'https://www.wiggle.co.uk/discover-different',
      headline: 'Default headline',
      strapline: '',
      calltoactiontext: 'Default call to action',
      color: 'white',
      contrastColor: 'dark',
    },
    {
      _meta: {
        name: 'string',
        schema: 'string',
        deliveryId: '1237612',
      },
      cssClass: '',
      background: { name: 'homepage-h-d' },
      calltoactionurl: 'https://www.wiggle.co.uk/discover-different',
      headline: 'Default headline',
      strapline: '',
      calltoactiontext: 'Default call to action',
      color: 'white',
      contrastColor: 'dark',
    },
    {
      _meta: {
        name: 'string',
        schema: 'string',
        deliveryId: '983492387',
      },
      cssClass: '',
      background: { name: 'homepage-h-d' },
      calltoactionurl: 'https://www.wiggle.co.uk/discover-different',
      headline: 'Default headline',
      strapline: '',
      calltoactiontext: 'Default call to action',
      color: 'white',
      contrastColor: 'dark',
    },
  ],
}
