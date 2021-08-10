import { render } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render footer element', () => {
    const { container } = render(<Footer />)
    expect(container.getElementsByTagName('footer')).toBeTruthy()
  })
})
