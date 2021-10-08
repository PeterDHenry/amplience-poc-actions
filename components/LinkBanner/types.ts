export type LinkBannerProps = {
  textAndCTA: {
    callToActionURL: string
    callToActionText: string
    headline: string
    strapline: string
  }
  backgroundColour: string
  fontColour: string
}

export const defaultLinkBannerProps: LinkBannerProps = {
  textAndCTA: {
    callToActionURL: 'https://www.wiggle.co.uk/sc/wiggle-plus',
    callToActionText: 'Find out more',
    headline:
      'Wiggle+ unlimited next day delivery & FREE RETURNS for a year - only £9.99',
    strapline: '',
  },
  backgroundColour: '#F7F7F7',
  fontColour: '#3C3C3B',
}
