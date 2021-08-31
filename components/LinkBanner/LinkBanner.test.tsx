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
  textAndCTA: {
    callToActionURL: 'Default URL',
    callToActionText: 'Default CTA Text',
    headline: 'Default Headline',
    strapline: 'Default Strapline',
  },
  backgroundColour: '#F7F7F7',
  fontColour: '3C3C3B',
}
