import { render } from '@testing-library/react'
import LinkBanner from './LinkBanner'
import { LinkBannerProps } from './types'
import '@testing-library/jest-dom'

describe('Link Banner component', () => {
  test('Matches snapshot', () => {
    const { asFragment } = render(<LinkBanner {...linkBannerProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  test('Validating props are assigned correctly', () => {
    const { container } = render(<LinkBanner {...linkBannerProps} />, {})

    const linkBannerLink = container
      .querySelector('a.link-banner')
      ?.getAttribute('href')
    const linkBannerCtaText = container.querySelector(
      '.link-banner .cta-btn'
    )?.textContent
    const linkBannerHeadline =
      container.querySelector('.link-banner div p')?.textContent

    expect(linkBannerLink).toMatch(linkBannerProps.textAndCTA.callToActionURL)
    expect(linkBannerCtaText).toMatch(
      linkBannerProps.textAndCTA.callToActionText.toUpperCase()
    )
    expect(linkBannerHeadline).toMatch(
      linkBannerProps.textAndCTA.headline.toUpperCase()
    )
  })
})

const linkBannerProps: LinkBannerProps = {
  textAndCTA: {
    callToActionURL: 'https://www.wiggle.co.uk/',
    callToActionText: 'Test CTA Text',
    headline: 'Test Headline',
    strapline: 'Test Strapline',
  },
  backgroundColour: '#F7F7F7',
  fontColour: '#3C3C3B',
}
