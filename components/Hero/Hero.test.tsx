import { render } from '@testing-library/react'
import Hero, { HeroProps } from './Hero'

describe('Hero component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Hero {...heroProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

const heroProps: HeroProps = {
  _meta: {
    name: 'string',
    schema: 'string',
    deliveryId: '1543512973',
  },
  cssClass: '',
  background: { name: 'homepage-h-d' },
  calltoactionurl: 'https://www.wiggle.co.uk/discover-different',
  headline: 'Default headline',
  strapline: 'Default Strapline',
  calltoactiontext: 'Default call to action',
  color: 'white',
  contrastColor: 'dark',
}