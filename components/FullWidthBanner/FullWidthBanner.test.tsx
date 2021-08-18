import { render } from '@testing-library/react'
import FullWidthBanner, { FullWidthBannerProps } from './FullWidthBanner'

describe('Full width banner component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<FullWidthBanner {...fullWidthBannerProps} />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('Should render FullWidthBanner component', () => {
    const { container } = render(<FullWidthBanner {...fullWidthBannerProps}/>)
    expect(container.getElementsByTagName('div')).toBeTruthy()
  })
})

const fullWidthBannerProps: FullWidthBannerProps = {
  _meta: {
    name: 'string',
    schema: 'string',
    deliveryId: '1543512973',
  },
  image: { name: 'homepageh1d' },
  linkValue: 'https://www.wiggle.co.uk/run-new-season-2021',
  header: 'Default header',
  subHeader: 'Default subheader',
  cta: 'Default cta',
}