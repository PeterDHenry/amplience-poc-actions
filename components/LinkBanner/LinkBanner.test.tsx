import { render } from '@testing-library/react'
import LinkBanner from './LinkBanner'
import { LinkBannerProps } from './types'

describe('Link Banner component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<LinkBanner {...linkBannerProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})

const linkBannerProps: LinkBannerProps = {
  mainText: 'Default Text',
  ctaText: 'Default CTA Text',
  backgroundColour: '#F7F7F7',
  fontColour: '#000',
  link: 'https://www.wiggle.co.uk/sc/wiggle-plus',
  showOnMobile: true
}
