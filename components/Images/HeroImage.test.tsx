import { render } from '@testing-library/react'
import { HeroImage } from './HeroImage'

describe('HeroImage component', () => {
  it('matches snapshot', () => {
    //uses default is this correct?
    const { asFragment } = render(<HeroImage />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
