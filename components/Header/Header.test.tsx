import { render } from '@testing-library/react'
import { Header } from './Header'

describe('Header component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Header />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render header element', () => {
    const { container } = render(<Header />)
    expect(container.getElementsByTagName('header')).toBeTruthy()
  })
})
