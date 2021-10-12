export type FullWidthBannerProps = {
  _meta: {
    name: string
    schema: string
    deliveryId: string
  }
  image: { name: string }
  textAndCTA: {
    callToActionURL: string
    callToActionText: string
    headline: string
    strapline: string
  }
}

export const defaultProps: FullWidthBannerProps = {
  _meta: {
    name: 'string',
    schema: 'string',
    deliveryId: '1543512973',
  },
  image: { name: 'homepageh1d' },
  textAndCTA: {
    callToActionURL: 'https://www.wiggle.co.uk/run-new-season-2021',
    callToActionText: 'Default cta text',
    headline: 'Default header',
    strapline: 'Default subheader',
  },
}
