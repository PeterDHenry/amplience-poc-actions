import { HeroProps } from '../Hero/types'

export type CarouselProps = {
  heroBannerList: HeroProps[]
}

export const defaultProps: CarouselProps = {
  heroBannerList: [
    {
      _meta: {
        name: 'Default ride like a pro banner',
        schema: 'https://wiggle.com/hero-banner',
        deliveryId: '18a7eee8-6c7a-4a92-8a76-29eb936679a8',
      },
      background: {
        _meta: {
          schema:
            'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
        },
        id: 'ef717f48-99e2-4717-89da-6f906056eae1',
        name: 'CCC-11-5-a',
        endpoint: 'wigglecrcnonprd',
        defaultHost: 'cdn.media.amplience.net',
      },
      textAndCTA: {
        headline: 'Default ride like a pro',
        callToActionURL: 'https://www.wiggle.co.uk/pro-riding-for-summer',
        callToActionText: 'Default shop now',
      },
    },
    {
      _meta: {
        name: 'Default Tailored for women banner',
        schema: 'https://wiggle.com/hero-banner',
        deliveryId: 'ecba6af1-17ce-4799-9d20-146b307af92d',
      },
      background: {
        _meta: {
          schema:
            'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
        },
        id: '9c6bd46b-21e2-4720-8be6-3fb4b9be6079',
        name: 'homepageh1d',
        endpoint: 'wigglecrcnonprd',
        defaultHost: 'cdn.media.amplience.net',
      },
      textAndCTA: {
        headline: 'Default Tailored for women',
        strapline: 'Your best-ever sports collection',
        callToActionText: 'Default Shop now',
        callToActionURL: 'https://www.wiggle.co.uk/womens-collection',
      },
    },
    {
      _meta: {
        name: 'Default Discover different banner',
        schema: 'https://wiggle.com/hero-banner',
        deliveryId: 'a6cac415-3411-4481-a741-c7d4e1edbff2',
      },
      background: {
        _meta: {
          schema:
            'http://bigcontent.io/cms/schema/v1/core#/definitions/image-link',
        },
        id: 'a11cb660-fd4a-498f-8222-022edfeb479b',
        name: 'homepage-h-d',
        endpoint: 'wigglecrcnonprd',
        defaultHost: 'cdn.media.amplience.net',
      },
      textAndCTA: {
        headline: 'Default Discover different',
        callToActionText: 'Default Find out more',
        callToActionURL: 'https://www.wiggle.co.uk/discover-different',
      },
    },
  ],
}
