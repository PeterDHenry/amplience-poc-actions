import { render, screen } from '@testing-library/react'
import Hero, { HeroProps } from './Hero'
import '@testing-library/jest-dom'

describe('Hero component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Hero {...heroProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  test('Check if image link is provided and an end point url', () => {
    render(<Hero {...heroProps} />, {})
    const heroLink = screen.getByRole('link')
    const heroLinkHref = heroLink.getAttribute('href')
    const heroImg = document.querySelector('img')
    const heroImgSrc = heroImg.getAttribute('src')

    expect(heroLink).toHaveAttribute('href')
    expect(heroLinkHref).toBeTruthy()
    expect(heroImg).toHaveAttribute('src')
    expect(heroImgSrc).toBeTruthy()
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
  color: 'white',
  contrastColor: 'dark',
  textAndCTA: {
    callToActionURL: 'https://www.wiggle.co.uk/discover-different',
    headline: 'Default headline',
    strapline: 'Default Strapline',
    callToActionText: 'Default call to action',
  },
}
