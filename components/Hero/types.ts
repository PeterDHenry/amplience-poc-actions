export type HeroProps = {
  _meta: {
    name: string
    schema: string
    deliveryId: string
  }
  cssClass?: string
  background: {
    _meta: {
      schema: string
    }
    id: string
    name: string
    endpoint: string
    defaultHost: string
  }
  //color: string
  //contrastColor: string
  textAndCTA: {
    callToActionURL: string
    callToActionText: string
    headline: string
    strapline?: string
  }
}

export const defaultProps: HeroProps = {
  _meta: {
    name: 'Ride like a pro banner',
    schema: 'https://wiggle.com/hero-banner',
    deliveryId: '18a7eee8-6c7a-4a92-8a76-29eb936679a8',
  },
  background: {
    _meta: {
      schema: 'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
    },
    id: 'ef717f48-99e2-4717-89da-6f906056eae1',
    name: 'CCC-11-5-a',
    endpoint: 'wigglecrcnonprd',
    defaultHost: 'cdn.media.amplience.net',
  },
  textAndCTA: {
    headline: 'Ride like a pro',
    callToActionURL: 'https://www.wiggle.co.uk/pro-riding-for-summer',
    callToActionText: 'Shop now',
  },
}
