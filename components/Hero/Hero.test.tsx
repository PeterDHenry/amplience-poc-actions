import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { defaultProps } from './types'

import '@testing-library/jest-dom'

describe('Hero component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Hero {...defaultProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  test('Check if image link is provided and an end point url', () => {
    render(<Hero {...defaultProps} />, {})
    const heroLink = screen.getByRole('link')
    const heroLinkHref = heroLink.getAttribute('href')
    const heroImg = document.querySelector('img')
    const heroImgSrc = heroImg?.getAttribute('src')

    expect(heroLink).toHaveAttribute('href')
    expect(heroLinkHref).toBeTruthy()
    expect(heroImg).toHaveAttribute('src')
    expect(heroImgSrc).toBeTruthy()
  })
})
